const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
// app.use("/", (req, res) => {
//   res.send("Api running");
// });
app.use("/api/users", userRoutes);
app.use("/api/gallery", galleryRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening to ${process.env.PORT}`);
});
