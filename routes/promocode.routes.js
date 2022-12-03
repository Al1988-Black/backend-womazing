const express = require("express");
const Promocode = require("../models/Promocode");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    try {
        const list = await Promocode.find();
        res.status(200).send(list); // или res.status(200).json(list)
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

module.exports = router;
