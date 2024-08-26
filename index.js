const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Import and use routes
const customerRoute = require("./routes/client-router");
const contactRoute = require("./routes/contact-router");
const projectRoute = require("./routes/project-router");

app.use("/", contactRoute);
app.use("/", customerRoute);
app.use("/", projectRoute);



// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/fliper", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
