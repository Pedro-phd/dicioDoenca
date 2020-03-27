const express = require('express')
const doencasController = require('./controllers/doencasController')
const doencasFilterController = require('./controllers/doencasFilterController')
const routes = express.Router()

routes.get('/', (req,res)=>{
    return res.json({ok:true})
})

routes.get('/doencas', doencasController.index)
routes.post('/doencas', doencasController.create)
routes.get('/filter', doencasFilterController.index)








module.exports = routes;