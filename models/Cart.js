const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        content: { type: String, required: true },
        // на чьей странице оставили комментарии
        pageId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        //Кто оставил комментарий
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    {
        timestamps: { createdAt: "created_at" }, // взамен поле createdAt будеи поле created_at
    }
);

module.exports = model("Cart", schema);
