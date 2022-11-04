const express = require('express');
const hbs = require('hbs')
const mongoose = require('mongoose')
const app = express();
const Detail = require('./models/Details')
const routes = require('./routes/main')
const Slider = require('./models/Sliders')
const Service = require('./models/Services')
const Gallery = require('./models/Gallery')
const bodyParser = require("body-parser")

app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials("views/partials")

// app.get("/",(req,res)=>{
//     res.send("This is my home page")
// })

app.use(bodyParser.urlencoded({extended:true}))
app.use('/static', express.static("public"))
app.use("", routes)

mongoose.connect("mongodb://localhost:27017/website_tut", () => {
    console.log("DB connnected")


    // Detail.create({
    //     brandName:"AnimeHub",
    //     brandIconUrl:"https://img.favpng.com/10/0/3/anime-icon-away-icon-face-icon-png-favpng-kQqBnHR7jN8TxGRq3TJhqzewe.jpg",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         },

    //     ],
    // })


    // code for slider


    // Slider.create(
    //     [
    //     {
    //         title:"Anime",
    //         subTitle:"Anime is for life",
    //         imgUrl:"/static/images/s1.jpg",
    //         class:"active"
    //     },
    //     {
    //         title:"Coding",
    //         subTitle:"Lost in the wave of the code",
    //         imgUrl:"/static/images/s2.jpg"
    //     },
    //     {
    //         title:"Gaming",
    //         subTitle:"Life is short, but not gaming",
    //         imgUrl:"/static/images/s13.jpg"
    //     }
    //  ]
    // )


    // code for services

    // Service.create([
    //     {
    //         icon: 'fa-brands fa-playstation',
    //         title: 'Provided best games',
    //         description: 'We provided the games so you can play without worry about cash',
    //         linkText: 'Visit',
    //         link: 'https://steamunlocked.net/'
    //     },
    //     {
    //         icon: 'fa-solid fa-play',
    //         title: 'Provided Anime Site',
    //         description: 'Watch Free Anime ',
    //         linkText: 'Watch',
    //         link: 'https://animixplay.to/'
    //     },
    //     {
    //         icon:'fa-brands fa-free-code-camp',
    //         title:'Provided best course',
    //         description:'We provided the course that will help our learner to grow',
    //         linkText:'Check',
    //         link:'https://www.freecodecamp.org/'
    //     }

    // ])

Gallery.create({
    imageUrl:'/static/images/s1.jpg'
})

})






app.listen(3000, () => {
    console.log("server is running")
})