const { Router } = require("express");
const router = Router();

router.get("/home", (req, res) => {
  res.send("GET request to the homepage");
});

module.exports = router;
