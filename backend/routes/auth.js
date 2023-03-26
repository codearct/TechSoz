const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "TechSöz'e Hoşgeldiniz.",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "Giriş Başarısız!!!",
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Giriş Başarısız!!!",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.CLIENT_URL}sources`,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profil", "email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: `${process.env.CLIENT_URL}sources`,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/github",
  passport.authenticate("github", { scope: ["profil", "email"] })
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
  });
  res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
