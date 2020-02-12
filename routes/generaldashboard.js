const express = require("express");

const db = require("./generaldashboardModal")


const router = express.Router();


////////////////////////////////////////////////////////








router.get("/Allgeneraldashboard", async (req, res) => {

  let data = await  db.getAllgeneraldashboardBy()
  try {
    res.json(data)
  } catch (error) {
    res.status(500).json({message:error})
  }


});


/////////////////////////get by id request//////////////////////////////////////






router.get("/Allgeneraldashboard/:id", async (req, res) => {
  const { id } = req.params;
let data = await db.getAllgeneraldashboardByid(id)
  try {
    res.json(data)
  } catch (error) {
    res.status(500).json({message:error})
  }


});







module.exports = router;