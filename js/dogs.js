function AppViewModel() {
  var self = this;

  self.activeDog = null;
  self.activeIncident = null;
  self.dog = dogs;
  self.justAddedDog = false;
  self.isViewInMap = false;
  self.walking = ko.observableArray([
    {
      name: "Lucky",
      started: ko.observable(moment().subtract(40, 'minutes')),
      walker: "Alex",
      behaviour: ko.observable(""),
      photos: ["img/dogs/Lucky/0.png"],
      visibleFromIndex: ko.observable(false)
    }
  ]);
  self.recent = ko.observableArray([
    {
      name: "Pappy",
      photos: ["img/dogs/Pappy/0.png"],
      activity: "Walked at " + moment().subtract(30, 'minutes').format("h:mm a")
    }
  ]);
  self.occupiedKennels = [];

  self.initVars = function() {
    self.createDogPicture = ko.observable("img/choose_picture.png");
    self.availableGenders = ['Male', 'Female'];
    self.createDogGender = ko.observable("");
    self.createDogName = ko.observable("");
    self.createDogBehaviour = ko.observable("");
    self.createDogMedical = ko.observable("");

    self.createIncidentLog = ko.observable("");
    self.createIncidentSubmitter = "Kristine"; // hardcoded for the moment
  }

  self.populateKennels = function() {
    self.dog().forEach(function(dog) {
      self.occupiedKennels.push(dog.kennel);
    });
  };

  /* === FIRST-RUN SETUP === */

  self.initVars();

  self.populateKennels();

  /* ===== ACTIONS ===== */
  self.addDog = function() {
    var name = self.createDogName().trim();
    if (name == "Crunch")
      hasCrunchBeenAdded = true;

    if (name === "") {
      myApp.alert("Please fill in dog's name.", "Kennel Keeper");
    } else if (self.createDogPicture() !== "img/chosen_pictures.png") {
      myApp.alert("Please select at least 1 photo.", "Kennel Keeper");
    } else {
      myApp.confirm("Are you sure?", "Kennel Keeper", function() {
        var newDog = {
          name: name,
          gender: self.createDogGender(),
          kennel: self.getUnoccupiedKennel(),
          showered: ko.observable(null),
          walked: ko.observable("No"),
          lastWalked: ko.observable(null),
          behaviour: ko.observable(self.createDogBehaviour()),
          medical: self.createDogMedical(),
          incident: ko.observableArray(),
          photos: [
          "img/dogs/NewDog/0.png",
          "img/dogs/NewDog/1.png"
          ]
        }
        self.dog.push(newDog);
        self.occupiedKennels.push(newDog.kennel);
        self.activeDog = newDog;
        self.initVars();
        self.justAddedDog = true;
        self.dog.sort(nameComparator);
        mainView.router.loadPage("dog.html");
        return true;
      });
    }
  };

  self.picturePicker = function() {
    self.createDogPicture("img/chosen_pictures.png");
  };

  self.updateDog = function() {
    var name = self.activeDog.name.trim();
    if (name === "") {
      myApp.alert("Please fill in dog's name.", "Kennel Keeper");
    } else {
      myApp.confirm("Are you sure?", "Kennel Keeper", function() {
        mainView.router.back({
          reloadPrevious: true
        });
      });
    }
  };

  self.resetViewInMap = function() {
    self.isViewInMap = false;
  };

  self.resetButton = function() {
    self.justAddedDog = false;
  };

  self.removeDog = function() {
    self.dog.remove(this);
  };

  self.retrieveDog = function(dog) {
    self.activeDog = dog;
    return true;
  };

  self.findDogAndLoad = function(name) {
    self.activeDog = self.dog()[self.dog().map(function(e) {
        return e.name;
      }).indexOf(name)];
  };

  self.walkButton = function() {
    if (self.activeDog.walked() == "No") {
      self.walking.push({
        name: self.activeDog.name,
        started: ko.observable(moment()),
        walker: "Kevin",
        behaviour: self.activeDog.behaviour,
        photos: self.activeDog.photos,
        visibleFromIndex: ko.observable(true)
      });
      self.activeDog.walked("Walking");
    } else if (self.activeDog.walked() == "Walking") {
      self.activeDog.walked("Yes");
      // remove from walking list
      pos = self.walking().map(function(e) {
        return e.name;
      }).indexOf(self.activeDog.name);
      self.walking.splice(pos, 1);

      // add to recent activity list
      self.recent.unshift({
        name: self.activeDog.name,
        photos: self.activeDog.photos,
        activity: "Walked at " + moment().format("h:mm a")
      });
    }
  };

  self.showerDog = function() {
    self.activeDog.showered(new Date());

    // add to recent activity list
    self.recent.unshift({
      name: self.activeDog.name,
      photos: self.activeDog.photos,
      activity: "Showered at " + moment().format("h:mm a")
    });
  };

  self.addIncident = function() {
    var log = self.createIncidentLog().trim();
    if (log === "") {
      myApp.alert("Please fill in your message.", "Kennel Keeper");
    } else {
      myApp.confirm("Are you sure?", "Kennel Keeper", function() {
        var newIncident = {
          log: ko.observable(log),
          date: Date.now(),
          submitter: self.createIncidentSubmitter
        }
        self.activeDog.incident.unshift(newIncident);
        self.createIncidentLog("");
        self.initVars();
      });
    }
  };

  self.setActiveIncident = function(log) {
    self.activeIncident = log;
  };

  self.updateIncident = function() {
    var log = self.activeIncident.log().trim();
    if (log === "") {
      myApp.alert("Please fill in message.", "Kennel Keeper");
    } else {
      myApp.confirm("Are you sure?", "Kennel Keeper", function() {
        mainView.router.back({
          reloadPrevious: true
        });
      });
    }
  };

  self.viewInMap = function(dog) {
    self.isViewInMap = true;
    mainView.router.loadPage("kennel-map.html");
  };

  /* ===== DISPLAY HELPERS ===== */
  self.walkStatus = function() {
    if (self.activeDog.walked() == "No") {
      return "Walk";
    } else if (self.activeDog.walked() == "Walking") {
      return "End walk";
    } else {
      return "Walked";
    }
  };

  self.daysAgoFromNow = function(date) {
    // newly created dogs have a null date
    if (date == null) {
      return "";
    }
    // compute difference in days
    var days = moment().diff(date, 'days');

    if (days == 0) {
      return "today";
    } else if (days == 1) {
      return "1 day ago";
    } else {
      return days + " days ago"
    }
  };

  self.dateOrNever = function(date) {
    // newly created dogs have a null date
    if (date == null) {
      return "Never";
    }

    return moment(date).format('D MMM');
  };

  self.isDateToday = function(date) {
    var today = moment();
    var date = moment(date);
    return today.format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
  };

  self.walkingRelativeTimeAndDuration = function(walkingDog, includeDogName) {
    // by default, don't include dog name (for backward compatibility with
    // Walking now page)
    if (includeDogName === undefined) {
      includeDogName = false;
    }

    var mins = moment().diff(walkingDog.started(), "minutes");
    var timeString = moment(walkingDog.started()).format("h:mm a");

    if (includeDogName) {
      return "Walking " + walkingDog.name + " since " + timeString + " (" + mins + " min ago)";
    }
    return "Walking since " + timeString + " (" + mins + " min ago)";
  };

  self.showerBadge = function(dog) {
    // dogs all need showers when at least 1 month
    return moment().diff(dog.showered(), 'months') >= 1;
  };

  self.walkBadge = function(dog) {
    return dog.walked() == "No";
  };

  self.isWalking = function(dog) {
    return dog.walked() == "Walking";
  };

  self.confirmWalk = function() {
    if (self.activeDog.walked() != "Yes") {
      // either to start walk or to end walk
      myApp.confirm("Are you sure?", "Kennel Keeper", function() {
        self.walkButton();
        if (self.activeDog.walked() === "Walking") {
          mainView.router.loadPage("index.html");
        }
      });
    } else {
      // already walked
      myApp.alert("Dog has already been walked. Let it rest.", "Kennel Keeper");
    }
  };

  self.confirmShower = function() {
    if (!self.isDateToday(self.activeDog.showered())) {
      myApp.confirm("Are you sure?", "Kennel Keeper", function() {
        self.showerDog();
      });
    } else {
      // already showered
      myApp.alert("Dog has already been showered today.", "Kennel Keeper");
    }
  };

  self.endWalkFromIndex = function(dog) {
    myApp.confirm("Are you sure?", "Kennel Keeper", function() {
      self.findDogAndLoad(dog.name);
      self.walkButton();
      dog.visibleFromIndex(false);
    });
  };

  self.getUnoccupiedKennel = function() {
    for(i = 5; i <= 100; i++) {
      if(self.occupiedKennels.indexOf(i) == -1) {
        return i;
      }
    }
  }

  self.nameSort = function() {
    self.dog.sort(nameComparator);
  }

  self.showerSort = function() {
    self.dog.sort(showerComparator);
  }

  self.walkSort = function() {
    self.dog.sort(walkComparator);
  }

  /* ===== COMPARATORS ===== */

  function nameComparator(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  };

  function walkComparator(a, b) {
    if (a.lastWalked() < b.lastWalked()) {
      return -1;
    } else if (a.lastWalked() > b.lastWalked()) {
      return 1;
    } else {
      return 0;
    }
  };

  function showerComparator(a, b) {
    if (a.showered() < b.showered()) {
      return -1;
    } else if (a.showered() > b.showered()) {
      return 1;
    } else {
      return 0;
    }
  };
}
