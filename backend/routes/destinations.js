const { destinationTermService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const destTerms = await destinationTermService.load();
  res.send(destTerms);
});

router.get("/:id", async (req, res) => {
  const destTerm = await destinationTermService.find(req.params.id);
  if (!destTerm) res.status(404).send("Kelime bulunamadı.");
  res.send(destTerm);
});

module.exports = router;
