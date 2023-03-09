const { creatorService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const creators = await creatorService.load();
  res.send(creators);
});
router.post("/", async (req, res) => {
  const creator = req.body;
  await creatorService.insert(creator);
  res.send(creator);
});

router.post("/:id/source", async (req, res) => {
  const creatorId = req.params.id;
  const { sourceTerm } = req.body;
  const newSrcTerm = await creatorService.createNewTerm(creatorId, sourceTerm);
  res.send(newSrcTerm);
});
module.exports = router;
