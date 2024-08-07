const express = require('express');
const ejs = require('ejs');
const path = require('path');
const indexRouter = require("./routes/indexRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended:true }));
app.use("/", indexRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});