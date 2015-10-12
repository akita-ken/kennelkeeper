// This observable array contains hardcoded dogs
var dogs = ko.observableArray([
    { 
      name: "Candy",
      gender: 0,
      kennel: 14,
      showered: new Date("2015-08-02T18:25:43"),
      walked: ko.observable("Yes"),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Coco",
      gender: 0,
      kennel: 4,
      showered: new Date("2015-08-02T18:25:43"),
      walked: ko.observable("No"),
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
      name: "Dee Dee", 
      gender: 0,
      kennel: 18,
      showered: new Date("2015-08-02T18:25:43"),
      walked: ko.observable("Yes"),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Lego", 
      gender: 1,
      kennel: 20,
      showered: new Date("2015-08-02T18:25:43"),
      walked: ko.observable("Yes"),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Ginger", 
      gender: 0,
      kennel: 12,
      showered: new Date("2015-08-02T18:25:43"),
      walked: ko.observable("Yes"),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Lucky", 
      gender: 1,
      kennel: 14,
      showered: new Date("2015-08-02T18:25:43"),
      walked: ko.observable("Yes"),
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Mentos", 
      gender: 1,
      kennel: 16,
      showered: new Date("2015-08-02T18:25:43"),
      walked: ko.observable("Yes"),
      behaviour: "",
      medical: "",
      incident: [
        
      ] 
    },
    { 
      name: "Charlie", 
      gender: 1,
      kennel: 2,
      showered: new Date("2015-08-02T18:25:43"),
      walked: ko.observable("Yes"),
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

  self.walking = [];

  self.addDog = function(name, gender, behaviour, medical) {
    self.dog.push(
      {
        name: name,
        gender: gender,
        kennel: 0, // this needs to be changed to a function
        showered: null,
        walked: false,
        behaviour: behaviour,
        medical: medical,
        incident: []
      }
    )
  };

  self.removeDog = function() {
    self.dog.remove(this);
  };

  self.retrieveDog = function(dog) {
    self.activeDog = dog;
    self.activeDogWalkStatus = ko.observable(self.activeDog.walked);
    return true;
  };

  self.walkDog = function() {
    self.activeDog.walked("Walking");
    self.walking.push(
      {
        name: self.activeDog.name,
        started: Date.now()
      }
    )
  };

  self.walkStatus = ko.computed(function() {
    
  });
}