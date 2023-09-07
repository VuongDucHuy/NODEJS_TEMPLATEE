
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("1.", (req, res) => {
    res.send("Ứng dụng đang chạy");
});

app.listen(8080, () => {
    console.log("Đang chạy trên cổng 8080");
});
