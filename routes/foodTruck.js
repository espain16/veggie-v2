const express = require("express");

const db = require("./foodTruckModal");



const router = express.Router();


router.get("/foodtruck", async (req, res) => {

  let data = await  db.find_foodtruck()
  try {
    res.json(data)
  } catch (error) {
    res.status(500).json({message:error})
  }


});


/////////////////////////get by id request//////////////////////////////////////






router.get("/foodtruck/:id", async (req, res) => {
  const { id } = req.params;
let data = await db.findById_foodtruck(id)
  try {
    res.json(data)
  } catch (error) {
    res.status(500).json({message:error})
  }


});

/////////////////////////post request//////////////////////////////////////


router.post("/foodtruck", async (req, res) => {

  let data = await db.insert_foodtruck(req.body)
 
  try {
    if (!req.body) {
        res.status(401).res.json({ message: "check your state in your form" });
      } else {
       res.status(201).json(data)
      }
  } catch (error) {
    res.status(500).json({message:error})
  }



});




/////////////////////////del request//////////////////////////////////////


router.delete("/foodtruck/:id", async (req, res) => {
  
  const { id } = req.params.id;

  let data = await db.remove_foodtruck(id)
  try {
    if (!id) {
        res.status(401).res.json({ message: "no id" });
      } else {
       res.status(201).json(data)
      }
  } catch (error) {
    res.status(500).json({message:error})
  }




});



router.put("/foodtruck/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
console.log(body)

  let update = await db.update_foodtruck(id,body)
  try {
    if (id) {
           res.status(200).json(update);
          }else{  res
                    .status(400)
             .json({ errorMessage: "Please provide look at the state for the user." });     }
  } catch (error) {
    res.status(500).json({message:error})
  }
})


module.exports = router;