const express = require ("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();
const todoRoutes=require("./routes/todoRoutes");
const PORT=3030;

const connectionOptions={useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}

mongoose.connect("mongodb://localhost/todolist", connectionOptions)
.then(()=>console.log("database is connected"))
.catch((err)=>console.error(err));

app.use(express.json());
app.use(cors());

app.use("/todos",todoRoutes);

app.listen(PORT,()=>{
    console.log("server is listening on PORT: "+PORT);
})