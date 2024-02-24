import carts from '../models/cartModel.js'

const cartDAO={}
cartDAO.getAll = async()=>{
    const car=await carts.find()
    return car
}

cartDAO.insertcandyCart = async (candyInfo) => {
    try {
        const cartsaved = new carts(candyInfo);
        await cartsaved.save();
        return true;
    } catch (error) {
        console.error('Error inserting candy into cart:', error.message);
        throw error;
    }
};


cartDAO.deletecandyCart = async (barcodecart) => {
    try {
        const candyDeleted = await carts.findOneAndDelete({ barcode: barcodecart });

        if (candyDeleted != null) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error deleting candy from cart:', error.message);
        throw error;
    }
};

export default cartDAO