import { Schema,model } from "mongoose";

const candysSchema = new Schema({
    barcode:String,
    description:String,
    brand:String,
    price:Number,
    cost:Number,
    stock:Number,
    expiredDate:String,
    status:Number
},{
    timestamps:true,
    versionKey:false
}

)

export default model('candys', candysSchema);