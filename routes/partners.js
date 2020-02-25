const router = require("express").Router();
const { partners } = require("../controllers");

router
  .get("/partners", partners.findAll)
  .get("/partner/:id", partners.findById)
  .post("/partner", partners.create)
  .post("/partner", partners.search);

module.exports = router;
