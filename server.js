const express = require("express");
const path = require("path");
const app = express();

const staticPath = path.resolve(__dirname, "./dist");
const staticWebsite = express.static(staticPath);

app.use(staticWebsite);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("Application is up and running on PORT : ", PORT);
});
