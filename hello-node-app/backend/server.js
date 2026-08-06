const express = require("express");

const app = express();

const PORT = process.env.PORT || 8081;
const SERVER_NAME = process.env.SERVER_NAME || "Server 1";

app.get("/api/hello", (req, res) => {

    const name = req.query.name || "Guest";

    res.json({
        message: `Hello ${name}!`,
        server: SERVER_NAME
    });

});

app.listen(PORT, () => {
    console.log(`${SERVER_NAME} is running on port ${PORT}`);
});