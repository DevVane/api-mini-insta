const knex = require('../conexao');

async function obterPostagem(req, res){
    
}

async function cadastrarPostagem(req, res){
    const { id } = req.usuario;
    const { texto, fotos } = req.body;

    if(!fotos || fotos.length === 0) {
        return res.status(400).json('É preciso informar ao menos uma foto');
    }
    
    try {
        const postagem = await knex('postagens').insert({ texto, usuario_id: id}).returning('*');

        if (!postagem) {
            return res.status(400).json('Não foi possível concluir a postagem');
        }

        for(const foto of fotos) {
            foto.postagem_id = postagem[0].id;
        }

        const fotosCadastradas = await knex('postagem_fotos').insert(fotos);

        if(!fotosCadastradas) {
            await knex('postagens').where({ id: postagem[0].id }).del();
            return res.status(400).json('Não foi possível concluir a postagem');
        }
        
        return res.status(200).json('Postagem realizada com sucesso.');
   
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

async function atualizarPostagem(req, res){
}

module.exports = {
    obterPostagem,
    cadastrarPostagem,
    atualizarPostagem
}