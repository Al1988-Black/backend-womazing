const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        category: { type: Schema.Types.ObjectId, ref: "Category" }, // делаем связь с моделью Profession
        name: { type: String },
        image: { type: String },
        price: Number,
        discount: Number,
        size: [{ type: Schema.Types.ObjectId, ref: "Size" }], // делаем связь с моделью Quality в скобках [] значит что значений может быть несколько
        color: [{ type: Schema.Types.ObjectId, ref: "Color" }],
        isNew: { type: Boolean },
    },
    {
        timestamps: true, // поле иформаци когда была создана модель и когда модель была обновлена
    }
);

module.exports = model("Product", schema);
