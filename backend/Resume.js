import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173"
}));

const port = 8080;
const hostname = "127.0.0.1";

mongoose.connect("mongodb://127.0.0.1:27017/cscorner")      
    .then(() => {
        app.listen(port, () => {
            console.log("Server started");
        });
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log(err)
        console.error("error");
    });

const dbSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    }
  
});

const Collection = mongoose.model("cscorner", dbSchema ,"studentDetail");

app.post("/submit",async (req, res) => {
    const {name, role, experience  } = req.body;
    const newData = new Collection({name, role, experience});
   await newData.save()
    console.log(newData)
    res.send(

        'form sumbited successfully'
    )
});

