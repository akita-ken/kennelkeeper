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

  self.addDog = function() {
    var newDog = {
      name: self.createDogName,
      gender: self.createDogGender,
      kennel: 0, // this needs to be changed to a function
      showered: ko.observable(null),
      walked: ko.observable("No"),
      behaviour: self.createDogBehaviour,
      medical: self.createDogMedical,
      incident: []
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
  }

  self.walkButton = function() {
    if (self.activeDog.walked() == "No") {
      self.activeDog.walked("Walking");
      self.walking.push({
        name: self.activeDog.name,
        started: Date.now(),
        walker: "TestUser"
      })
    } else if (self.activeDog.walked() == "Walking") {
      alert("Dog is happy, let's go! :3");
      pos = self.walking.map(function(e) {
        return e.name; 
      }).indexOf(self.activeDog.name);
      self.walking.splice(pos, 1);
      self.activeDog.walked("Yes");
    } else {
      alert("Dog has already been walked. Let it rest.");
    }
  };

  self.walkStatus = ko.computed({
    read: function() {
      if (self.activeDog.walked() == "No") {
        return "Walk";
      } else if (self.activeDog.walked() == "Walking") {
        return "End walk";
      } else {
        return "Walked";
      }
    },
    deferEvaluation: true
  });

  self.showerDog = function() {
    console.log("hey");
    self.activeDog.showered(new Date());
  }

  self.showerAbsoluteDate = function() {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var date = self.activeDog.showered();
    return date.getDay() + " " + months[date.getMonth()];
  }

  self.showerRelativeDate = function() {
    var now = new Date();
    var date = self.activeDog.showered();

    // compute difference in days, using the milliseconds since epoch
    var days = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    // round off to integer
    days = Math.round(days);

    if (days == 0) {
      return "today";
    } else if (days == 1) {
      return "1 day ago";
    } else {
      return days + " days ago"
    }
  }

  self.showerBadge = function(dog) {
    // insert shower date duration calculation logic here
    return false;
  }

  self.walkBadge = function(dog) {
    if (dog.walked() == "No") {
      return true;
    }
    return false;
  }

  self.addIncident = function() {
    var newIncident = {
      log: self.createIncidentLog,
      date: Date.now(),
      submitter: self.createIncidentSubmitter
    }
    self.activeDog.incident.push(newIncident);
    self.initVars();
  }
}
