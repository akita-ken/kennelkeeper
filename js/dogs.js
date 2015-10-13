// This observable array contains hardcoded dogs
var dogs = ko.observableArray([
    { 
      name: "Candy",
      gender: 0,
      kennel: 14,
      showered: ko.observable(new Date("2015-08-02T18:25:43")),
      walked: ko.observable("Yes"),
      lastWalked: ko.observable(new Date("2015-08-02T18:25:43")),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Coco",
      gender: 0,
      kennel: 4,
      showered: ko.observable(new Date("2015-08-02T18:25:43")),
      walked: ko.observable("No"),
      lastWalked: ko.observable(new Date("2015-08-02T18:25:43")),
      behaviour: "Aggressive towards cyclists. Attacks other dogs.",
      medical: "Limb injury. If she starts limping again, please feed her with 25mg of metacam, that can be found in the medical box labelled 1A in the kitchen.",
      incident: [
        {
          log: "Attacked a passer-by, who got scratched quite badly. Be careful!",
          date: new Date("2015-06-18T13:50:43"),
          submitter: "Kristine"
        },
        {
          log: "Suddenly jumped out at a passing cyclist, causing him to swerve and nearly fall! Short leash and keep her away from cyclists.",
          date: new Date("2015-05-07T14:47:43"),
          submitter: "Alex"
        }
      ]
    },
    { 
      name: "Donut", 
      gender: 0,
      kennel: 18,
      showered: ko.observable(new Date("2015-08-02T18:25:43")),
      walked: ko.observable("Yes"),
      lastWalked: ko.observable(new Date("2015-08-02T18:25:43")),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Lego", 
      gender: 1,
      kennel: 20,
      showered: ko.observable(new Date("2015-08-02T18:25:43")),
      walked: ko.observable("Yes"),
      lastWalked: ko.observable(new Date("2015-08-02T18:25:43")),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Ginger", 
      gender: 0,
      kennel: 12,
      showered: ko.observable(new Date("2015-08-02T18:25:43")),
      walked: ko.observable("Yes"),
      lastWalked: ko.observable(new Date("2015-08-02T18:25:43")),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Lucky", 
      gender: 1,
      kennel: 14,
      showered: ko.observable(new Date("2015-08-02T18:25:43")),
      walked: ko.observable("Yes"),
      lastWalked: ko.observable(new Date("2015-08-02T18:25:43")),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Mentos", 
      gender: 1,
      kennel: 16,
      showered: ko.observable(new Date("2015-08-02T18:25:43")),
      walked: ko.observable("Yes"),
      lastWalked: ko.observable(new Date("2015-08-02T18:25:43")),
      behaviour: "",
      medical: "",
      incident: [
        
      ] 
    },
    { 
      name: "Charlie", 
      gender: 1,
      kennel: 2,
      showered: ko.observable(new Date("2015-08-02T18:25:43")),
      walked: ko.observable("Yes"),
      lastWalked: ko.observable(new Date("2015-08-02T18:25:43")),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    }
]);

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
  }

  self.removeDog = function() {
    self.dog.remove(this);
  };

  self.retrieveDog = function(dog) {
    self.activeDog = dog;
    return true;
  };

  self.walkButton = function() {
    if(self.activeDog.walked() == "No") {
      self.activeDog.walked("Walking");
      self.walking.push(
        {
          name: self.activeDog.name,
          started: Date.now(),
          walker: "TestUser"
        }
      )
    } else if(self.activeDog.walked() == "Walking") {
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

  self.walkStatus = ko.computed(
    {
      read: function() {
        if(self.activeDog.walked() == "No") {
          return "Walk";
        } else if(self.activeDog.walked() == "Walking") {
          return "End walk";
        } else {
          return "Already walked";
        }
      },
      deferEvaluation: true
    }
  );

  self.showerDog = function() {
    console.log("hey");
    self.activeDog.showered(new Date());
  }

  self.showerBadge = function(dog) {
    // insert shower date duration calculation logic here
    return false;
  }

  self.walkBadge = function(dog) {
    if(dog.walked() == "No") {
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