const connection = require('../database/connection')

module.exports = {
    async index(req,res){
        const doencas = await connection('doencas').select('*');
        return res.json(doencas)
    },

    async create(req,res){
        const {nome, historia,causas,sintomas,prevencao} = req.body
        await connection('doencas').insert({
            nome,
            historia,
            causas,
            sintomas,
            prevencao
        })
        return res.json({nome})
    }
}