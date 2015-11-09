// This observable array contains hardcoded dogs
var dogs = ko.observableArray([
  {
    name: "Candy",
    gender: "Female",
    kennel: 22,
    showered: ko.observable(moment().subtract(11, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(10).minutes(23).seconds(30)),
    behaviour: ko.observable(""),
    medical: "",
    photos: [
      "img/dogs/Candy/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Coco",
    gender: "Female",
    kennel: 4,
    showered: ko.observable(moment().subtract(22, 'days')),
    walked: ko.observable("No"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(11).minutes(29).seconds(5)),
    behaviour: ko.observable("Aggressive towards cyclists. Attacks other dogs."),
    medical: "Limb injury. If she starts limping again, please feed her with a tablet of Metacam 2.5mg, which can be found in the medicine box labelled 1A in the kitchen.",
    photos: [
      "img/dogs/Coco/0.png",
      "img/dogs/Donut/0.png"
    ],
    incident: ko.observableArray([
      {
        log: ko.observable("Attacked a passer-by, who got scratched quite badly. Be careful!"),
        date: new Date("2015-06-18T13:50:43+08:00"),
        submitter: "Kristine"
      },
      {
        log: ko.observable("Suddenly jumped out at a passing cyclist, causing him to swerve and nearly fall! Short leash and keep her away from cyclists."),
        date: new Date("2015-05-07T14:47:43+08:00"),
        submitter: "Alex"
      }
    ])
  },
  {
    name: "Donut",
    gender: "Female",
    kennel: 3,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(10).minutes(42).seconds(30)),
    behaviour: ko.observable(""),
    medical: "",
    photos: [
      "img/dogs/Donut/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Lego",
    gender: "Male",
    kennel: 21,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("No"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(11).minutes(7).seconds(44)),
    behaviour: ko.observable("Lego is a shy dog, he may be startled by large vehicles. Walkers should be firm with him and give him confidence to continue walking. He has a low risk of biting."),
    medical: "Used to have heartworm but has since recovered since January 2015.",
    photos: [
      "img/dogs/Lego/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Ginger",
    gender: "Female",
    kennel: 24,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(11).minutes(34).seconds(30)),
    behaviour: ko.observable(""),
    medical: "",
    photos: [
      "img/dogs/Ginger/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Lucky",
    gender: "Male",
    kennel: 2,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Walking"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(13).minutes(15).seconds(0)),
    behaviour: ko.observable("A peaceful dog."),
    medical: "",
    photos: [
      "img/dogs/Lucky/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Mentos",
    gender: "Male",
    kennel: 8,
    showered: ko.observable(moment().subtract(34, 'days')),
    walked: ko.observable("No"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(9).minutes(12).seconds(30)),
    behaviour: ko.observable("Mentos is an active and playful dog, do keep him safe when walking near large drains."),
    medical: "",
    photos: [
      "img/dogs/Mentos/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Charlie",
    gender: "Male",
    kennel: 3,
    showered: ko.observable(moment().subtract(7, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(11).minutes(54).seconds(30)),
    behaviour: ko.observable(""),
    medical: "",
    photos: [
      "img/dogs/Charlie/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Pringles",
    gender: "Female",
    kennel: 11,
    showered: ko.observable(moment().subtract(35, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(12).minutes(05).seconds(30)),
    behaviour: ko.observable("Pringles responds very well to physical touch, walkers are encouraged to play with her so that she can be comfortable with humans."),
    medical: "",
    photos: [
      "img/dogs/Pringles/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Ris",
    gender: "Male",
    kennel: 12,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("No"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(12).minutes(27).seconds(30)),
    behaviour: ko.observable(""),
    medical: "",
    photos: [
      "img/dogs/Ris/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Kyoto",
    gender: "Male",
    kennel: 14,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(12).minutes(41).seconds(30)),
    behaviour: ko.observable(""),
    medical: "",
    photos: [
      "img/dogs/Kyoto/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Muthu",
    gender: "Male",
    kennel: 15,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(12).minutes(55).seconds(30)),
    behaviour: ko.observable(""),
    medical: "",
    photos: [
      "img/dogs/Muthu/0.png"
    ],
    incident: ko.observableArray([

    ])
  },
  {
    name: "Pappy",
    gender: "Male",
    kennel: 14,
    showered: ko.observable(moment().subtract(13, 'days')),
    walked: ko.observable("Yes"),
    lastWalked: ko.observable(moment().subtract(1, 'days').hours(13).minutes(20).seconds(30)),
    behaviour: ko.observable(""),
    medical: "",
    photos: [
      "img/dogs/Pappy/0.png"
    ],
    incident: ko.observableArray([

    ])
  }
]);
