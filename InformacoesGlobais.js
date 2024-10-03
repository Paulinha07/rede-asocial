const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function name(params) {
    const res = await fetch(url)
    const dados = await res.json(url)
    console.log =(dados)
}

vizualizarInformacoesGLobais()
