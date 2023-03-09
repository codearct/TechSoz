const { memberService } = require("../services");
const router = require("express").Router();

// router.post("/", async (req, res) => {
//   const member = req.body;
//   await memberService.insert(member);
//   res.send(member);
// });

router.get("/", async (req, res) => {
  const members = await memberService.load();
  res.send(members);
});

router.post("/:id/destination", async (req, res) => {
  const memberId = req.params.id;
  const { sourceId, destTerm } = req.body;

  const newDestTerm = await memberService.suggestNewTerm(
    memberId,
    sourceId,
    destTerm
  );

  res.send(newDestTerm);
});

router.post("/:id/vote", async (req, res) => {
  const memberId = req.params.id;
  const { destTermId } = req.body;

  await memberService.voteTerm(memberId, destTermId);
  res.send("Türkçe'ye katkınız için teşekkür ederiz.");
});

module.exports = router;
