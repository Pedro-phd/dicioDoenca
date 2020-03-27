const connection = require('../database/connection')

module.exports = {
    async index(req,res){
        const {doenca} = req.headers
        const doencasFilter = await connection('doencas').where('nome',doenca);
        return res.json(doencasFilter)
    }
        }