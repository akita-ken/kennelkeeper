// This observable array contains hardcoded dogs
var dogs = ko.observableArray([
  { 
    name: "Candy",
    gender: 0,
    kennel: 22,
    showered: ko.observable(moment().subtract(11, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Candy/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Coco",
    gender: 0,
    kennel: 4,
    showered: ko.observable(moment().subtract(22, 'days')),
    walked: ko.observable("No"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(11).minutes(29).seconds(5)),
    behaviour: "Aggressive towards cyclists. Attacks other dogs.",
    medical: "Limb injury. If she starts limping again, please feed her with 25mg of metacam, that can be found in the medical box labelled 1A in the kitchen.",
    photos: [
      "img/dogs/Coco/0.png",
      "img/dogs/Donut/0.png"
    ],
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
    kennel: 3,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Donut/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Lego", 
    gender: 1,
    kennel: 21,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("No"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(11).minutes(7).seconds(44)),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Lego/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Ginger", 
    gender: 0,
    kennel: 24,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Ginger/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Lucky", 
    gender: 1,
    kennel: 2,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Walking"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(13).minutes(15).seconds(0)),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Lucky/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Mentos", 
    gender: 1,
    kennel: 8,
    showered: ko.observable(moment().subtract(34, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Mentos/0.png"
    ],
    incident: ko.observableArray([

    ]) 
  },
  { 
    name: "Charlie", 
    gender: 1,
    kennel: 3,
    showered: ko.observable(moment().subtract(7, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Charlie/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Pringles", 
    gender: 1,
    kennel: 11,
    showered: ko.observable(moment().subtract(35, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Pringles/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Ris", 
    gender: 1,
    kennel: 12,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Ris/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Kyoto", 
    gender: 1,
    kennel: 14,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Kyoto/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Muthu", 
    gender: 1,
    kennel: 15,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Muthu/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  { 
    name: "Pappy", 
    gender: 1,
    kennel: 14,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(new Date("2015-08-02T18:25:43+08:00")),
    behaviour: "",
    medical: "",
    photos: [
      "img/dogs/Pappy/0.png"
    ],
    incident: ko.observableArray([

    ])
  }
]);
