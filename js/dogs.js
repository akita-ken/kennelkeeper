// This observable array contains hardcoded dogs
var dogs = ko.observableArray([
    { 
      name: "Candy",
      gender: 0,
      kennel: 14,
      showered: "2015-08-02T18:25:43.511Z",
      walked: true,
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Coco",
      gender: 0,
      kennel: 4,
      showered: "2015-08-02T18:25:43.511Z",
      walked: false,
      behaviour: "Aggressive towards cyclists. Attacks other dogs.",
      medical: "Limb injury. If she starts limping again, please feed her with 25mg of metacam, that can be found in the medical box labelled 1A in the kitchen.",
      incident: [
        {
          log: "Attacked a passer-by, who got scratched quite badly. Be careful!",
          date: "2015-06-18T13:50:43.511Z",
          submitter: "Kristine"
        },
        {
          log: "Suddenly jumped out at a passing cyclist, causing him to swerve and nearly fall! Short leash and keep her away from cyclists.",
          date: "2015-05-07T14:47:43.511Z",
          submitter: "Alex"
        }
      ]
    },
    { 
      name: "Dee Dee", 
      gender: 0,
      kennel: 18,
      showered: "2015-08-02T18:25:43.511Z",
      walked: true,
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Lego", 
      gender: 1,
      kennel: 20,
      showered: "2015-08-02T18:25:43.511Z",
      walked: true,
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Ginger", 
      gender: 0,
      kennel: 12,
      showered: "2015-08-02T18:25:43.511Z",
      walked: true,
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Lucky", 
      gender: 1,
      kennel: 14,
      showered: "2015-08-02T18:25:43.511Z",
      walked: true,
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    },
    { 
      name: "Mentos", 
      gender: 1,
      kennel: 16,
      showered: "2015-08-02T18:25:43.511Z",
      walked: true,
      behaviour: "",
      medical: "",
      incident: [
        
      ] 
    },
    { 
      name: "Charlie", 
      gender: 1,
      kennel: 2,
      showered: "2015-08-02T18:25:43.511Z",
      walked: true,
      behaviour: "",
      medical: "",
      incident: [
        
      ]
    }
]);

function AppViewModel() {
  var self = this;

  self.dog = dogs;

  self.addDog = function(name, gender, behaviour, medical) {
    self.dog.push(
      {
        name: name,
        gender: gender,
        kennel: 0,
        showered: null,
        walked: false,
        behaviour: behaviour,
        medical: medical,
        incident: []
      }
    )
  }

  self.removeDog = function() {
    self.dog.remove(this)
  }
}