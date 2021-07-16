const router = require('express').Router();
const db = require('../../models');

router.get("/workouts", (req, res) => {
    // empty object means no filter

    // db.Workout.find({})
    // .then(dbPizzaData=>{
    //     res.json(dbPizzaData);
    // })

    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
    .then(dbPizzaData=>{
        res.json(dbPizzaData);
    })
    
})


router.put("/workouts/:id", (req,res)=>{
    db.Workout.findOneAndUpdate(
        // finds a specific workout that matches the req.params.id
        // the first paramater is filter
        { _id: req.params.id }, 
        // updating it with this: pushing the req.body into the workout's exercises array
        {
            $push: {
                exercises: req.body
            }
        }, 
        // return the updated value afterwards
        { new: true}
    ).then(dbTransaction=>{
        res.json(dbTransaction);
    })
})


router.post("/workouts", (req,res)=>{
    db.Workout.create(req.body)
    .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });    
})

router.get("/workouts/range", (req,res) =>{
    
})






module.exports = router;