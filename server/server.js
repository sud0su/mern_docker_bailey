require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/test", (req, res) => {
    res.json({ Hi: "Welcome" });
});

app.listen(
    PORT,
    // eslint-disable-next-line no-console
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
