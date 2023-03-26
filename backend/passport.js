const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const { memberService, creatorService } = require("./services");

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
      },
      async (accesToken, refreshToken, profile, done) => {
        const newMember = {
          externalId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        };
        try {
          let member = await memberService.findBy("externalId", profile.id);
          console.log(member);
          if (member.length > 0) {
            done(null, member[0]);
          } else {
            member = await memberService.insert(newMember);
            console.log(member);
            done(null, member);
          }
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
        scope: ["profile", "email"],
      },
      async (accesToken, refreshToken, profile, done) => {
        const newCreator = {
          externalId: profile.id,
          name: profile.username,
          email: profile.email,
        };
        try {
          let creator = await creatorService.findBy("externalId", profile.id);
          if (creator.length > 0) {
            done(null, creator[0]);
          } else {
            creator = await creatorService.insert(newCreator);
            done(null, creator);
          }
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  passport.serializeUser((member, done) => {
    done(null, member);
  });

  passport.deserializeUser(async (member, done) => {
    done(null, member);
  });
};
