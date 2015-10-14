function AppViewModel() {
  var self = this;
  
  self.activeDog = null;
  self.dog = dogs;
  self.justAddedDog = false;
  self.walking = [];

  self.initVars = function() {
    self.availableGenders = ['Male', 'Female'];
    self.createDogGender = ko.observable("");
    self.createDogName = ko.observable("");
    self.createDogBehaviour = ko.observable("");
    self.createDogMedical = ko.observable("");

    self.createIncidentLog = ko.observable("");
    self.createIncidentSubmitter = "Tester"; // hardcoded for the moment
  }
  self.initVars();

  /* ===== ACTIONS ===== */
  self.addDog = function() {
    var newDog = {
      name: self.createDogName,
      gender: self.createDogGender,
      kennel: 0, // this needs to be changed to a function
      showered: ko.observable(null),
      walked: ko.observable("No"),
      behaviour: self.createDogBehaviour,
      medical: self.createDogMedical,
      incident: ko.observableArray()
    }
    self.dog.push(newDog);
    self.activeDog = newDog;
    self.initVars();
    self.justAddedDog = true;
    return true;
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
      self.activeDog.walked("Walking");
      self.walking.push({
        name: self.activeDog.name,
        started: Date.now(),
        walker: "TestUser",
        behaviour: self.activeDog.behaviour,
        photos: self.activeDog.photos,
        visibleFromIndex: ko.observable(true)
      });
    } else if (self.activeDog.walked() == "Walking") {
      pos = self.walking.map(function(e) {
        return e.name; 
      }).indexOf(self.activeDog.name);
      self.walking.splice(pos, 1);
      self.activeDog.walked("Yes");
    }
  };

  self.showerDog = function() {
    self.activeDog.showered(new Date());
  };

  self.addIncident = function() {
    var newIncident = {
      log: self.createIncidentLog(),
      date: Date.now(),
      submitter: self.createIncidentSubmitter
    }
    self.activeDog.incident.unshift(newIncident);
    self.createIncidentLog("");
    self.initVars();
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

  self.walkingRelativeTimeAndDuration = function(walkingDog, includeDogName) {
    // by default, don't include dog name (for backward compatibility with
    // Walking now page)
    if (includeDogName === undefined) {
      includeDogName = false;
    }

    var mins = moment().diff(walkingDog.started, "minutes");
    var timeString = moment(walkingDog.started).format("h:mm a");

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
        mainView.router.loadPage("index.html");
      });
    } else {
      // already walked
      myApp.alert("Dog has already been walked. Let it rest.", "Kennel Keeper");
    }
  };

  self.confirmShower = function() {
    myApp.confirm("Are you sure?", "Kennel Keeper", function() {
      self.showerDog();
    });
  };

  self.endWalkFromIndex = function(dog) {
    self.findDogAndLoad(dog.name);
    self.walkButton();
    dog.visibleFromIndex(false);
    mainView.router.reloadPage("index.html");
  };
}
