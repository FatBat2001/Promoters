const router = require("express").Router();
const path = require('path'); 
const upload = require('../controllers/createEventController'); 
const Event = require('../model/Event'); 
const fs = require('fs'); 
const { deleteMedia } = require("../helper/deleteMediaHelper");


// Create a route for file uploads
router.post("/", upload.array("files"), async (req, res) => {
  const imageExts = [".jpeg", ".png", ".gif", ".WebP", ".jpg"];
  let cover = "";

  const media = [];
  req.files.forEach((file) => {
    media.push(file.filename);
  });

  media.forEach((filename) => {
    if (imageExts.includes(path.extname(filename)) && cover === "") {
      cover = filename;
    }
  });

  const event = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    media: media,
    cover: cover,
  };
  console.log(event);

  const duplicate = await Event.findOne({title: event.title}).exec();
  if (duplicate) {
    // erase all files you just inserted 
    deleteMedia(event.media); 
    return res.status(409).json('Event with same title is present in the database');   
  }

  try { 
    const newEvent = new Event(event);
    newEvent.save(); 
    res.status(201).json({ message: "File(s) uploaded successfully" });
  } catch(err) {
    res.status(500).json({'message':err.message}); 
  }


});


module.exports = router;
