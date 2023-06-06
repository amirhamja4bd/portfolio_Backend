const ProductsModel=require('../models/productsModel');

exports.ProductList=async (req, res) => {
    let pageNo = Number(req.params.pageNo);
    let perPage = Number(req.params.perPage);
    let searchValue = req.params.searchKey;
    const skipRow = (pageNo - 1) * perPage;
    let Rows;
    let Total;
    if (searchValue!=="0") {
        let SearchRgx = {"$regex": searchValue, "$options": "i"}
        let SearchQuery = {$or: [{title: SearchRgx},{price: SearchRgx},{category: SearchRgx}]}

        Total = await ProductsModel.aggregate([{$match: SearchQuery}, {$count: "total"}])
        Rows = await ProductsModel.aggregate([{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}])
    } else {
        Total = (await ProductsModel.aggregate([{$count: "total"}]))[0]['total']
        Rows = await ProductsModel.aggregate([{$skip: skipRow}, {$limit: perPage}])
    }
    res.status(200).json({status: "success", total: Total, data: Rows})
}






// const ProductsModel=require('../models/productsModel');

// exports.ProductList=async (req, res) => {
//     try{
//         let pageNo = Number(req.params.pageNo);
//         let perPage = Number(req.params.perPage);
//         let searchValue = req.params.searchKey;
//         let skipRow = (pageNo - 1) * perPage;

//         if (searchValue!=="0") {
//             let SearchRgx = {"$regex": searchValue, "$options": "i"}
//             let SearchQuery = {$or: [{name: SearchRgx}, {description: SearchRgx}, {keywords: SearchRgx},]}

//             data = await ProductsModel.aggregate([{
//                 $facet:{
//                     total:[{$match: SearchQuery}, {$count: "count"}],
//                     Rows:[{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}]
//                 }
//             }])

//         } 
//         else {
//             data = await ProductsModel.aggregate([{
//                 $facet:{
//                     total:[{$match: SearchQuery}, {$count: "count"}],
//                     Rows:[{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}]
//                 }
//             }])
//         }
//         res.status(200).json({status: "success", total: total, data: Rows})
//     }

//     catch(err){
//         res.status(400).json({status: "fail", error: err})
//     }
    

    
// }
