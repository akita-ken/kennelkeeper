// Configure moment.js
moment.locale('en', {
  calendar: {
    lastDay: '[yesterday]',   // switch these three to initial lowercase
    sameDay: '[today at] LT',       //
    nextDay: '[tomorrow at] LT',    //
    lastWeek: '[last] dddd',
    nextWeek: 'dddd [at] LT',
    sameElse: 'D MMM YYYY'
  }
});

// Initialize your app
var myApp = new Framework7({
    material: true, // enable Material theme
    cache: false, // disable page cache
    pushState: true, // web app so add hash navigation e.g. /#/about.html
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {

});

var appViewModel = new AppViewModel();
ko.applyBindings(appViewModel);

// Put JS that you want to run when the page is loaded in Page Callbacks
// because if you put it in the page fragments, they don't get run.
//
// apply knockout.js bindings on all these page inits
function applyKoBindings(page) {
  ko.applyBindings(appViewModel, page.container);
}

var pages = ['index', 'dog', 'all-dogs', 'create-dog', 'edit-dog', 'showerme',
    'walkme', 'walkingnow', 'dog-incidents', 'kennelmap', 'edit-incident',
    'recent'];
pages.forEach(function(page) {
  myApp.onPageInit(page, applyKoBindings);
});

myApp.onPageInit('index', function(page) {
  myApp.swiper(".swiper-container", {
    pagination: ".swiper-pagination"
  });
});

myApp.onPageInit('dog', function(page) {
  myApp.swiper(".swiper-container", {
    pagination: ".swiper-pagination"
  });
});

myApp.onPageInit('all-dogs', function(page) {
  appViewModel.nameSort();
});

myApp.onPageInit('walkme', function(page) {
  appViewModel.walkSort();
});

myApp.onPageInit('showerme', function(page) {
  appViewModel.showerSort();
});

myApp.onPageInit('walkingnow', function(page) {
  // special case for Lucky so that she is always walked since 45 min ago
  var results = appViewModel.walking().filter(function(e) {
    return e.name == "Lucky"
  });
  if (results.length > 0) {
    results[0].started(moment().subtract(45, 'minutes'));
  }
});

var hasCrunchBeenAdded = false;
var mapCenter = [-140, -50];

myApp.onPageInit('kennelmap', function(page) {
  var map = L.map('map', {
    center: mapCenter,
    zoom: 0,
    minZoom: 0,
    maxZoom: 1.5,
    zoomAnimation: true,
    /*touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,*/
    zoomControl: false,
    attributionControl: false,
    keyboard: false,
    unloadInvisibleTiles: true,
    reuseTiles: true,
    crs: L.CRS.Simple
  });

  var w = 2331,
      h = 2331,
      url;

  if (!hasCrunchBeenAdded) {
    url = 'img/kennel-map.png';
  } else {
    url = 'img/kennel-map-crunch.png'
  }

  // unproject() takes in a Point (and zoom level), and returns a LatLng
  // "unproject" the image x/y coordinates to map lat/long coordinates
  var southWest = map.unproject([0, h], 3);
  var northEast = map.unproject([w, 0], 3);
  var bounds = new L.LatLngBounds(southWest, northEast);
  L.imageOverlay(url, bounds).addTo(map);
  map.setMaxBounds(bounds);
  /*
  L.tileLayer('img/kennel-map.png', {
    tileSize: 500,
    noWrap: true,
    continuousWorld: true,
    minZoom: 1,
    maxZoom: 1,
    //bounds: bounds
  }).addTo(map);
  */
  /*
  var ccd = L.polygon([
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10]
  ]).addTo(map);
  */

  var mentos = L.polygon(computeBounds(-79, -98, 0, 35), { fillOpacity: 0.0 }).addTo(map);
  var crunch = L.polygon(computeBounds(-138, -159, 0, 35), { fillOpacity: 0.0 }).addTo(map);
  var ccd = L.polygon(computeBounds(-159, -180, 0, 35), { fillOpacity: 0.0 }).addTo(map);
  var lucky = L.polygon(computeBounds(-180, -200, 0, 35), { fillOpacity: 0.0 }).addTo(map);

  var pringles = L.polygon(computeBounds(-79, -98, 80, 113), { fillOpacity: 0.0 }).addTo(map);
  var ris = L.polygon(computeBounds(-98, -120, 80, 113), { fillOpacity: 0.0 }).addTo(map);
  var kpm = L.polygon(computeBounds(-138, -159, 80, 113), { fillOpacity: 0.0 }).addTo(map);

  var candy = L.polygon(computeBounds(-58, -98, 176, 208), { fillOpacity: 0.0 }).addTo(map);
  var lego = L.polygon(computeBounds(-120, -160, 176, 208), { fillOpacity: 0.0 }).addTo(map);

  var ginger = L.polygon(computeBounds(-92, -131, 242, 268), { fillOpacity: 0.0 }).addTo(map);

  var centers = {
    'Mentos': computeCenter(-79, -98, 0, 35),
    'Crunch': computeCenter(-138, -159, 0, 35),
    'ccd': computeCenter(-159, -180, 0, 35),
    'Lucky': computeCenter(-180, -200, 0, 35),
    'Harry': computeCenter(-202, -223, 0, 35),
    'Pringles': computeCenter(-79, -98, 80, 113),
    'Ris': computeCenter(-98, -120, 80, 113),
    'kpm': computeCenter(-138, -159, 80, 113),
    'Candy': computeCenter(-58, -98, 176, 208),
    'Lego': computeCenter(-120, -160, 176, 208),
    'Ginger': computeCenter(-92, -131, 242, 268)
  }

  if (appViewModel.isViewInMap && appViewModel.activeDog !== null) {
    var name = appViewModel.activeDog.name;
    var center;

    if (name === 'Coco' || name === 'Charlie' || name === 'Donut') {
      center = centers['ccd'];
    } else if (name === 'Kyoto' || name === 'Pappy' || name === 'Muthu') {
      center = centers['kpm'];
    } else {
      center = centers[name];
    }

    if (center === undefined) {
      map.center = mapCenter;
    } else {
      map.zoomIn(1.5, {
        animate: false
      });

      map.panTo(center, {
        animate: true,
        duration: 1
      });
    }
  } else {
    map.setZoomAround([-135, 2331], 1.5, {
      animate: false
    });

    map.panTo(mapCenter, {
      animate: true,
      duration: 1.5
    });
  }

  mentos.on('click', function(e) {
    appViewModel.findDogAndLoad('Mentos');
    mainView.router.loadPage('dog.html');
  });

  crunch.on('click', function(e) {
    appViewModel.findDogAndLoad('Crunch');
    mainView.router.loadPage('dog.html');
  });

  ccd.on('click', function(e) {
    var buttons = [
        {
            text: 'Dogs in kennel',
            bold: true,
            label: true
        },
        {
            text: 'Coco',
            bold: true,
            onClick: function() {
              appViewModel.findDogAndLoad('Coco');
              mainView.router.loadPage('dog.html');
            }
        },
        {
            text: 'Charlie',
            bold: true,
            onClick: function() {
              appViewModel.findDogAndLoad('Charlie');
              mainView.router.loadPage('dog.html');
            }
        },
        {
            text: 'Donut',
            bold: true,
            onClick: function() {
              appViewModel.findDogAndLoad('Donut');
              mainView.router.loadPage('dog.html');
            }
        },
    ];
    myApp.actions(buttons);
  });

  lucky.on('click', function(e) {
    appViewModel.findDogAndLoad('Lucky');
    mainView.router.loadPage('dog.html');
  });

  pringles.on('click', function(e) {
    appViewModel.findDogAndLoad('Pringles');
    mainView.router.loadPage('dog.html');
  });

  ris.on('click', function(e) {
    appViewModel.findDogAndLoad('Ris');
    mainView.router.loadPage('dog.html');
  });

  kpm.on('click', function(e) {
    var buttons = [
        {
            text: 'Dogs in kennel',
            bold: true,
            label: true
        },
        {
            text: 'Kyoto',
            bold: true,
            onClick: function() {
              appViewModel.findDogAndLoad('Kyoto');
              mainView.router.loadPage('dog.html');
            }
        },
        {
            text: 'Muthu',
            bold: true,
            onClick: function() {
              appViewModel.findDogAndLoad('Muthu');
              mainView.router.loadPage('dog.html');
            }
        },
        {
            text: 'Pappy',
            bold: true,
            onClick: function() {
              appViewModel.findDogAndLoad('Pappy');
              mainView.router.loadPage('dog.html');
            }
        },
    ];
    myApp.actions(buttons);
  });

  candy.on('click', function(e) {
    appViewModel.findDogAndLoad('Candy');
    mainView.router.loadPage('dog.html');
  });

  lego.on('click', function(e) {
    appViewModel.findDogAndLoad('Lego');
    mainView.router.loadPage('dog.html');
  });

  ginger.on('click', function(e) {
    appViewModel.findDogAndLoad('Ginger');
    mainView.router.loadPage('dog.html');
  });

  /*
      +x
       ^
       |
       |
       +-----> +y
  */
  // figures out the bounds for a rectangle from x1 to x2
  // and from y1 to y2
  function computeBounds(x1, x2, y1, y2) {
    return [[x1, y1], [x2, y1], [x2, y2], [x1,y2]];
  }

  function computeCenter(x1, x2, y1, y2) {
    var x = (x1 + x2) / 2;
    var y = (y1 + y2) / 2;
    return [x, y];
  }

});
