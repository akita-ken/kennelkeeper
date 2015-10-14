// This observable array contains hardcoded dogs
var dogs = ko.observableArray([
  { 
    name: "Candy",
    gender: 0,
    kennel: 14,
    showered: ko.observable(new Date("2015-09-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Coco",
    gender: 0,
    kennel: 4,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("No"),
    lastWalked: ko.observable(new Date("2015-10-13T14:25:43+08:00")),
    behaviour: "Aggressive towards cyclists. Attacks other dogs.",
    medical: "Limb injury. If she starts limping again, please feed her with 25mg of metacam, that can be found in the medical box labelled 1A in the kitchen.",
    incident: ko.observableArray([
      {
        log: "Attacked a passer-by, who got scratched quite badly. Be careful!",
        date: new Date("2015-06-18T13:50:43+08:00"),
        submitter: "Kristine"
      },
      {
        log: "Suddenly jumped out at a passing cyclist, causing him to swerve and nearly fall! Short leash and keep her away from cyclists.",
        date: new Date("2015-05-07T14:47:43+08:00"),
        submitter: "Alex"
      },
      {
        log: "Testing!",
        date: new Date("2015-05-01T00:00:00+08:00"),
        submitter: "Admin"
      }
    ])
  },
  { 
    name: "Donut", 
    gender: 0,
    kennel: 18,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Lego", 
    gender: 1,
    kennel: 20,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Ginger", 
    gender: 0,
    kennel: 12,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Lucky", 
    gender: 1,
    kennel: 14,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Mentos", 
    gender: 1,
    kennel: 16,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ]) 
  },
  { 
    name: "Charlie", 
    gender: 1,
    kennel: 2,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Pringles", 
    gender: 1,
    kennel: 20,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Ris", 
    gender: 1,
    kennel: 2,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Kyoto", 
    gender: 1,
    kennel: 19,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Muthu", 
    gender: 1,
    kennel: 21,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Pappy", 
    gender: 1,
    kennel: 17,
    showered: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    incident: ko.observableArray([

    ])
  }
]);
