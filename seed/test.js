const db = require('../config/database')
const Portfolio = require('../models/Protflio')
const skills = require('../models/Skill')

const  newskills = new skills({
    name:"Front end",
    number:80
})

const newPortFolio = new Portfolio({
        name:'Ali Esmail',
        logo:'AL-Ghaith',
        about_person:"Hello, My name is Nasser Esmail, I am Web Developer and also a Computer Trainer .If you have any web project or you need any special course in the computer field contact me.I am Web Developer. .If you have any web project or you want to make software for your bussniess contact me . I make your project as soon as possible.",
        image_person:'image/logo.png',
        skills:newskills
    })

    newPortFolio.save((err)=> {
    
        if(!err) {
            console.log('record was added')
        } else {
            console.log(err)
        }    
    })
newskills.save();


//newskills.save();

