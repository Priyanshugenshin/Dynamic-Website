const express = require("express");
const Detail = require("../models/Details")
const Slider = require("../models/Sliders")
const Service = require("../models/Services")
const Contact = require("../models/Contact");
const Gallery = require("../models/Gallery");

const routes = express.Router()

routes.get("/",async(req,res)=>{
    const details = await Detail.findOne({"_id":"63607c39e476737560e0656d"})
    const slides = await Slider.find()
    const services = await Service.find()

    // console.log(slides)
 
    // console.log(details)
    res.render ("index",{
        details:details,
        slides:slides,
        services:services,

    })

    
})

routes.get("/gallery",async(req,res)=>{
    const details = await Detail.findOne({"_id":"63607c39e476737560e0656d"})
    const gallerys = await Gallery.find()
    res.render("gallery",{
        details:details,
        gallerys:gallerys
    })
})

routes.post("/process-contact-form",async(req,res)=>{
console.log("form submited")
// console.log(req.body)
try {
    const data = await Contact.create(req.body)
    // console.log(data)
    res.redirect('/')
} catch (err) {
    console.log('err',err)
    res.redirect('/')
}
})

module.exports = routes