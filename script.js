const express = require("express");
const app = express();

// const hamza = (req, res, next) => {
//     if (!req.query.name) {
//         res.send("!provide your name ");
//     } else if (req.query.name == "hamza") {
        
//         next(); // Continue to next middleware if name doesn't match
//     } else {
//         res.send("you are trasapasser")
//     }
// };

// const elham = (req, res, next) => {
//     if (!req.query.name) {
//         res.send("!provide your name ");
//     } else if (req.query.name == "elham") {
        
//         next(); // Continue to next middleware if name doesn't match
//     } else {
//         res.send("you are trasapasser")
//     }
// };

// const eman = (req, res, next) => {
//     if (!req.query.name) {
//         res.send("!provide your name ");
//     } else if (req.query.name == "eman") {
        
//         next(); // Continue to next middleware if name doesn't match
//     } else {
//         res.send("you are trasapasser")
//     }
// };

// // Define route handlers
// app.get("/", hamza, (req, res) => {
//     res.send("Welcome to Home Page");
// });

// app.get("/about", elham, (req, res) => {
//     res.send("Welcome to About Page");
// });

// app.get("/contact", eman, (req, res) => {
//     res.send("Welcome to Contact Page");
// });

// // Start the server

const bodyParser = require("body-parser");
app.use(bodyParser.json())

let dataBase = [];
app.post("/signUp",(req,res)=>{
    const {name,email,password} = req.body;
    var data = dataBase.push(req.body);
    console.log(name,email,password);

    res.send({
        status:200,
        message:"SignUP successfully",
        data:dataBase
    })
    
})


app.post("/login",(req,res)=>{
    let user = false;
   if(dataBase.length>0){
    dataBase.map((data)=>{
     
        if(req.body.email === data.email && req.body.password === data.password){ res.send("log in successfully") 
        user = true;
        }
    })
    if(user === false){
    res.send("Incorrect data");
    
   }
}
    
})






    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });











