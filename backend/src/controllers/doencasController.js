const connection = require('../database/connection')

module.exports = {
    async index(req,res){
        const doencas = await connection('doencas').select('*');
        return res.json(doencas)
    },

    async create(req,res){
        const {nome, definicao,causas,sintomas,prevencao} = req.body
        await connection('doencas').insert({
            nome,
            definicao,
            causas,
            sintomas,
            prevencao
        })
        return res.json({nome})
    }
}