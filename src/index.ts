import http from "http";
import express from "express";

const app = express();
const PORT: number = 3000;

app.get("/", (req, res) => {
    res.send("Hello, TypeScript Backend!");
});

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
