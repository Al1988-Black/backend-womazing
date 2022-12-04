const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        number: { type: String, required: true },
        city: { type: String, required: true },
        street: { type: Schema.Types.ObjectId, ref: "City" },
        houseNumber: { type: String, required: true },
        flatNumber: { type: String, required: true },
        comment: { type: String },
        costOrder: { type: Number, required: true },
        discountPromo: { type: Number, required: true },
    },
    {
        timestamps: { createdAt: "created_at" }, // взамен поле createdAt будеи поле created_at
    }
);

module.exports = model("Order", schema);
