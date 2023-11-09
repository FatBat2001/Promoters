const  Event = require('../model/Event');  
const router = require('express').Router(); 

router.get('/', async (req, res) => {
    try {
        const data = await Event.find().exec();
        handleData(req, data);     
        res.status(200).json(data);
        
    } catch(err) {
        res.status(500).json(err); 
    }
    
}); 

router.get('/:category', async (req, res) => {
    try {
        const data = await Event.find({category: req.params.category.toUpperCase()}).exec(); 
        handleData(req, data); 
        res.status(200).json(data);
        
    } catch(err) {
        res.status(500).json(err); 
    }
}); 


const handleData = (req, data) => {
    data.forEach((element) => {
        for (let i = 0; i < element.media.length; i ++) {
            element.media[i] = "http://" + req.hostname +  "/" + element.media[i]; 
        }
        element.cover = "http://" + req.hostname +  "/" + element.cover;
    }); 
}

module.exports = router; 