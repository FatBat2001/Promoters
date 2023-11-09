const router = require("express").Router();
const Event = require("../model/Event");
const { ObjectId } = require("mongodb");
const {deleteMedia}  = require('../helper/deleteMediaHelper'); 

router.delete("/", async (req, res) => {
    if (!req.body.id)
        return res.status(400).json({ message: "Event ID must be provided" });

    try {
        const event = await Event.findOne({ _id: req.body.id });
        if (!event) return res.status(203).json(`No event matched the ID ${req.body.id}`); 

        deleteMedia(event.media);
        const result = await Event.deleteOne({ _id: req.body.id });
        res.status(200).json(result);
    
    } catch (err) {
        console.log(err);
    }

});

module.exports = router;
