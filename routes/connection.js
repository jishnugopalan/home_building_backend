var express=require('express')
routes=express.Router()
var connectionController=require("../controller/connection-controller")




routes.post("/sendrequest",connectionController.sendConnectionRequest)
routes.post("/viewconnection-by-user",connectionController.viewConnectionByUser)
routes.post("/viewconnection-by-vendor",connectionController.viewConnectionByVendor)
routes.post("/updateconnection",connectionController.updateConnectStatus)
routes.post("/viewconnectionbyid",connectionController.viewConnectionById)




module.exports = routes