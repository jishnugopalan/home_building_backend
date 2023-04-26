var express=require('express')
routes=express.Router()
var quotationController=require("../controller/quotation-controller")
routes.post('/addquotation',quotationController.AddQuotation)
routes.post('/view-quotationby-vendor',quotationController.viewQuotationsByVendor)
routes.post('/view-quotationby-customer',quotationController.viewQuotationsByCustomer)
routes.post('/viewquotationbyid',quotationController.findQuotationById)
routes.post('/sendreply',quotationController.sendReply)

module.exports = routes




