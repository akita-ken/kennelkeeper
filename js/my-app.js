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

// Put JS that you want to run when the page is loaded in Page Callbacks
// because if you put it in the page fragments, they don't get run.
myApp.onPageInit('dog', function(page) {
    // code here gets run when 'dog' page (<div data-page="dog">) is loaded
});

myApp.onPageInit('kennelmap', function(page) {
  //var southWest = L.latLng(0, 0),
    //northEast = L.latLng(800, 500),
   // bounds = L.latLngBounds(southWest, northEast);

  var map = L.map('map', {
    center: [-350, 370],
    zoom: 1,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    zoomControl: false,
    attributionControl: false,
    keyboard: false,
    unloadInvisibleTiles: true,
    reuseTiles: true,
    crs: L.CRS.Simple
  });

  L.tileLayer('img/kennel-map.png', {
    tileSize: 1331, 
    noWrap: true, 
    continuousWorld: true,
    minZoom: 1,
    maxZoom: 1,
    //bounds: bounds
  }).addTo(map);

  var ccd = L.polygon([
    [0, 0],
    [0, 0],
    [10, 10],
    [10, 50]
]).addTo(map);

});
