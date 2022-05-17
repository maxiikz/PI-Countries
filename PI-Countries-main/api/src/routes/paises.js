const {savesCountry, getCountry} = require("../controller/countries.controller");
const { Router } = require('express');
const router = Router();

router.get("/countries", savesCountry);
router.get("/countries/:id", getCountry);

module.exports = router;