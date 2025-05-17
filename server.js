const express = require("express");
const  router  = require("./routes/search_route");
const cors = require("cors");
// constants
const port = 3000;

// server
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/search", router);


// application start
app.listen(port, () => {
  console.log(`app running on port:${port}`);
});
