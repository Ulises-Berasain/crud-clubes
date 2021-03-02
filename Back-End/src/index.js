const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const PORT = 8080;
const app = express();
const hbs = exphbs.create();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.engine("handlebars", hbs.engine);
app.set("view engine", "hanblebars");
app.use(express.static(`${__dirname}/uploads`));
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/api",require("./routes/equipos"));

app.listen(PORT);
