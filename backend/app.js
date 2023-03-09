require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
require("./passport")(passport);
require("./mongo-connection");

const {
  homeRouter,
  creatorsRouters,
  sourcesRouters,
  membersRouters,
  destinationsRouter,
  authRouters,
} = require("./routes");

const app = express();

app.set("view engine", "pug");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:8080",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/", homeRouter);
app.use("/auth", authRouters);
app.use("/creators", creatorsRouters);
app.use("/sources", sourcesRouters);
app.use("/members", membersRouters);
app.use("/destinations", destinationsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listeng ${PORT}`);
});
