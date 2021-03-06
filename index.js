import dotenv from "dotenv";
import app from "./app";
import "./sequelize";

dotenv.config();

const PORT = process.env.PORT || 1031;

const handleListening = () =>
  console.log(`✅  Listening on http://localhost:${PORT}`);

app.listen(process.env.PORT, handleListening);
