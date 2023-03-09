const { sourceTermService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const sources = await sourceTermService.load();
  // res.render("sources", { sources });
  res.send(sources);
});

router.get("/:id", async (req, res) => {
  const source = await sourceTermService.find(req.params.id);
  if (!source) res.status(404).send("Kelime bulunamadı.");
  // res.render("source", { source });
  res.send(source);
});

module.exports = router;
