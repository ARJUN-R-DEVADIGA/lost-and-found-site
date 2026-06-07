const express = require("express");

const router = express.Router();

const Item = require("../models/Item");


// GET ALL ITEMS
router.get("/", async (req, res) => {

    try {

        const items = await Item.find();

        res.json(items);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// CREATE ITEM
router.post("/", async (req, res) => {

    try {

        const item = new Item(req.body);

        const savedItem = await item.save();

        res.json(savedItem);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// UPDATE ITEM
router.put("/:id", async (req, res) => {

    try {

        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedItem);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// DELETE ITEM
router.delete("/:id", async (req, res) => {

    try {

        await Item.findByIdAndDelete(req.params.id);

        res.json({
            message: "Item deleted"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

module.exports = router;