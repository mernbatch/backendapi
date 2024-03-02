const express = require("express");
const router = express.Router();

const photoArray = [
  {
    _id: 2001,
    title: "Natural way",
    src: "https://media.istockphoto.com/id/612404606/photo/the-jokulsarlon-glacier-lagoon-in-iceland.jpg?s=1024x1024&w=is&k=20&c=E4f6NcM58a2AWibDqOIzjJcs9mYsp0mOl0gjKFMdKUk=",
  },
  {
    _id: 2002,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1709037813912-f2b0cfa924e4?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2003,
    title: "Natural way",
    src: "https://media.istockphoto.com/id/1468656074/photo/together-again.jpg?s=1024x1024&w=is&k=20&c=vr1HcfpKUbCnpaFwII5JqOEX01Yfk9WVphgxXGQ0Izk=",
  },
  {
    _id: 2004,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1709037813912-f2b0cfa924e4?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 20045,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2006,
    title: "Natural way",
    src: "https://media.istockphoto.com/id/612404606/photo/the-jokulsarlon-glacier-lagoon-in-iceland.jpg?s=1024x1024&w=is&k=20&c=E4f6NcM58a2AWibDqOIzjJcs9mYsp0mOl0gjKFMdKUk=",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2007,
    title: "Natural way",
    src: "https://images.unsplash.com/photo-1700252761451-344039ee94df?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

router.get("/", (req, res) => {
  res.send(photoArray);
});

module.exports = router;
