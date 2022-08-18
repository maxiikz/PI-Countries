const {findActivities, createActivity} = require("../controller/activities.controller");
const { Router } = require('express');
const router = Router();
router.put("/activity/:id", async(req,res)=>{
    try {
        let id = req.params.id
        let{name}= req.body
       await activity.update({name},{
            where:{
                id,
            }
        })
        res.status(200).send("si")
    } catch (error) {
        res.status(400).send("no se actualizo")
        
    }
})
router.get("/activity", findActivities);
router.post("/activity", createActivity);

module.exports = router;