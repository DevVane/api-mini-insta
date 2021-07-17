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

async function curtirPostagem(req, res){
    const { id } = req.usuario;
    const { postagemId } = req.params;

    try {
        const postagem = await knex('postagens').where({ id: postagemId}).first();
        
        if(!postagem) {
            return res.status(404).json('Postagem não encontrada');
        }

        const jaCurtiu = await knex('postagem_curtidas')
            .where({ usuario_id: id, postagem_id: postagem.id })
            .first();

        if(jaCurtiu) {
            return res.status(400).json('A postagem já foi curtida');
        }

        const curtida = await knex('postagem_curtidas')
            .insert({
                usuario_id: id, 
                postagem_id: postagem.id
            });
        if(!curtida) {
            return res.status(400).json('Não foi possível curtir essa postagem');
        }

        return res.status(200).json('Postagem curtida com sucesso');

    } catch (error) {
       return res.status(400).json(error.message); 
    }
}

module.exports = {
    obterPostagem,
    cadastrarPostagem,
    curtirPostagem
}