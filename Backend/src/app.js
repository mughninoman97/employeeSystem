const express = require("express")

const empModel = require('./models/emp.model')

const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
    const empData = []


app.get('/', (req,res) =>{
    res.send("the App is up and running")
})


app.post('/post', async (req,res)=>{
    const data = req.body
    console.log(req.body);
    

    const employee = await empModel.create({
        name: req.body.name,
         email: req.body.email,
         title:req.body.title,
         detpartment:req.body.detpartment,
         phone:req.body.phone,
         emptype:req.body.employmentType,
         notes:req.body.notes,


        empid:req.body.empid,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
       

    })

    res.status(201).json({
        message: 'employee created succesfully',
        employee

    })


})

app.get('/allemp',async (req,res) =>{
    const allemp = await empModel.find()

     res.status(201).json({
        message: 'emp created succesfully',
        allemp
        

    })

})

app.delete('/delete/:id', async(req,res) =>{
    const id = req.params.id
    console.log(id);
    
   await empModel.findByIdAndDelete(id)

     res.status(201).json({
        message: 'emp deleted succesfully',
        empData
        
        

    })
})

app.patch('/update/:id', async(req,res) =>{
        const id = req.params.id

     console.log(id);
     console.log(req.body);

    const name = req.body.name
    const age = req.body.age
    const empid = req.body.empid
    const gender = req.body.gender
    const email = req.body.email

   await empModel.findByIdAndUpdate(id,{ name:name, age : age, empid : empid, gender : gender,
     email:email})

     res.status(201).json({
        message: 'emp updated succesfully',
    })
})

// app.post('/post', (req,res) =>{

//     // console.log(req.body);
//     empData.push(req.body)

//     res.status(201).json({
//         message: "employee creaed succesfully",
//         //empData

//     })
    
// })

// app.get('/allemp', (req,res) =>{
//     res.status(200).json({
//         message: "fetched all employees",
//         empData: empData
//     })
// })

// app.delete('/delete/:id', (req,res) =>{
//     const id = req.params.id
//     console.log(id);
//     delete empData[id]
    
//      res.status(201).json({
//         message: "employee deleted succesfully",
//         empData:empData[id]
//     })
// })

// app.patch('/update/:id', (req,res) =>{
//      const id = req.params.id
//      console.log(req.body);
     
  

//     console.log(id);

//     empData[id].name = req.body.name
//     empData[id].age = req.body.age
//     empData[id].empid = req.body.empid
//     empData[id].gender = req.body.gender

//     res.status(201).json({
//         message:"emp updated succesfully",
//         empData:empData[id]
//     })
// })

module.exports = app