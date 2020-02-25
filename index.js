const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1", routes.partners);

app.listen(5000, () => console.log(`Geo is running on port 5000`));
