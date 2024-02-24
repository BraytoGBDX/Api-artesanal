import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    barcode: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        default: 1 
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('carts', cartSchema);
