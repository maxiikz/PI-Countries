const {findActivities, createActivity} = require("../controller/activities.controller");
const { Router } = require('express');
const router = Router();

router.get("/activity", findActivities);
router.post("/activity", createActivity);

module.exports = router;