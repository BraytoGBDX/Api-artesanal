import candys from '../models/candyModel.js'

const C = console.log.bind(console.log)
const candysDAO={}
candysDAO.getAll = async()=>{
    const candy=await candys.find()
    return candy
}

candysDAO.getOne = async(candybc)=>{
    const candy=await candys.findOne({barcode:candybc})
    return candy
}

candysDAO.insertcandy=async(candy)=>{
    const candysaved=new candys(candy)
    await candysaved.save()
    return true
}

candysDAO.updatecandys=async(candybc,candy)=>{
    const candyUpdated=await candys.findOneAndUpdate({barcode:candybc},candy)
    if(candyUpdated!=null){
        return true
    }else{
        return false
    }

}

candysDAO.deletecandy=async(barcodeCandy)=>{
    const candyDeleted=await candys.findOneAndDelete({barcode:barcodeCandy})
    if(candyDeleted!=null){
        return true
    }else{
        return false
    }
}



export default candysDAO;