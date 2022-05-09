import React from "react";

const Projects = [
  {
    id: 1,
    name:'Resturant Menu',
    info:"This is a menu app with functional buttons that filter as you click .",
    img: require("./assets/Portfolio/menu.png"),
    category: "React",
    cName: "single-project",
  },
  {
    id: 2,
    name:'Reviews',
    info:'This is a reviews app that slides left and right and it also has a suprise me button  ',
    img: require("./assets/Portfolio/reviews.png"),
    category: "React",
    cName: "single-project",
  },
  {
    id: 3,
    name:'Slider',
    info:'This is a slider app that slides reviews and does so impulsively when you dont clickon the buttons',
    img: require("./assets/Portfolio/slider.png"),
    category: "React",
    cName: "single-project",
  },
  {
    id: 4,
    name:'Tabs',
    info:'This a tab app that lets you render different info as you click on the buttons.',
    img: require("./assets/Portfolio/tabs.png"),
    category: "React",
    cName: "single-project",
  },
  {
    id: 5,
    info:'Thisis a tours guide app that lets pick whichever tour you want,if not you can pass on to the next one',
    name:'Tours',
    img: require("./assets/Portfolio/tours.png"),
    category: "React",
    cName: "single-project",
  },
  {
    id: 6,
    name:'Exercise Tracker',
    info:'this is a fully functional app with a backend ,that lets you record data and request it by viewing your exercise history on particular days. ',
    img: require("./assets/Portfolio/tracker.png"),
    category: "Mern",
    cName: "single-project",
  },
];

export default Projects;
