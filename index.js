const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const createUser = require("./Routes/createUser");
const mongo = require("./connection");
const listmentor = require("./Routes/listStudentMentor");
var updatementor = require("./Routes/updatementor");

async function loadApp() {
    try {
        await mongo.connect();
        
        // Middlewares
        app.use(cors());
        app.use(express.json());

        app.use("/create", createUser)
        app.use("/list", listmentor)
        app.use("/update", updatementor)

        app.listen(process.env.PORT);
    } catch (err) {
        console.error("error starting app");
    }
    
}

loadApp();