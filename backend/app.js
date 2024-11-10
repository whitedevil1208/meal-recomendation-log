const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors")
app.use(cors())
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect("mongodb+srv://vikramballa184:apple123@cluster0.iinmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// User schema and model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const User = mongoose.model("User", userSchema);

app.get("/",(req,res)=>{
    res.send("hi")
})

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body)
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json("User registered");
    } catch (error) {
        res.status(400).json("Error registering user");
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json("Login successful");
        } else {
            res.status(401).json("Invalid credentials");
        }
    } catch (error) {
        res.status(400).send("Error logging in");
    }
});

app.listen(5000,()=>{
    console.log("running....")
})
