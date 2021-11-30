const router = require("express").Router()

router.get("/", (req,res) => {
    res.send("hey, it's user route")
})

//to use it to index.js, export it
module.exports = router