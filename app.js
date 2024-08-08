const express = require('express');
const ejs = require('ejs');
const path = require('path');
const indexRouter = require("./routes/indexRoutes");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended:true }));
app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}!`);
});