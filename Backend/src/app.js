const express = require("express"); //
const connectDB = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const dealRoutes = require("./routes/deal.routes");
const claimRoutes = require("./routes/claim.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Database connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/claims", claimRoutes);

module.exports = app;