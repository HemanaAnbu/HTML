const mongoose = require('mongoose');
const express = require('express');
const Student = require("./models/Student")
const PORT = 7000;
const cors = require('cors');
mongoose.connect("mongodb://127.0.0.1:27017/srmrmp")
.then(()=> {
    const js = express();
    js.use(cors());
    js.use(express.json());
    js.get("/id",
        (req,res)=>{
            Student.findbyID({_id:req.params.id})
            .then(student=>res.json(student))
            .catch(err=>res.json(err));
        }
    )
    js.delete("/deleteUser/:id",
        (req,res)=>{
            Student.findByIdAndDelete({_id:req.params.id})
            .then(student=>res.json(student))
            .catch(err=>res.json(err));

        }
    )
    js.put("/updateUser/:id",
        (req,res)=>{
            Student.findByIdAndUpdate(
                {_id: req.params.id},
                {
                    firtName:req.body.firtName,
                    lastName:req.body.lastName,
                    gender:req.body.gender,
                    cgpa: req.body.cgpa,
                }
            )
            .then(student=>res.json(student))
            .catch(err=>res.json(err));
        }
    )

    js.post("/createUser",
        (req,res)=>{
            Student.create(req.body)
            .then(student=>res.json(student))
            .catch(err=>res.json(err));
        });
    js.get("/",
        (req,res)=>{
        Student.find({})
        .then(students=>res.json(students))
        .catch((err)=>res.json(err))
        }
    );
    js.listen(PORT,
        ()=> console .log (`server is running on http://localhost:${PORT}`)
    );
})
.catch(()=> console.log('connection error'))










