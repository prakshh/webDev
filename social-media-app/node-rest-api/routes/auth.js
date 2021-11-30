const router = require("express").Router()
const User = require("../models/User");

// RESGISTER
router.get("/register", async(req,res) => {
    const user = await new User({
        username: "john",
        email: "john@gmail.com",
        password: "123456"
    })
    await user.save();
    res.send("ok");
});
// router.get("/", (req,res) => {
//     res.send("hey, it's auth route")
// })

//to use it to index.js, export it
module.exports = router