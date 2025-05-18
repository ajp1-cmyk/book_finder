const express = require("express");
const  router  = require("./routes/search_route");
const cors = require("cors");
const path = require("path");

// constants
const port = 3000;

// server
const app = express();

// middlewares
app.set('views','./views');
app.set('view engine','ejs');
app.use(express.static("./static"))
app.use(express.json());
app.use(cors());
app.use("/search", router);

// home route
app.get("/",(req,res) => {
    res.render("home");
})

// application start
app.listen(port, () => {
  console.log(`app running on port:${port}`);
});
