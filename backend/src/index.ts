import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.status(200).send("Hello from server!"));

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));