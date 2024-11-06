const url - 'https://raw.githubusercontent.com/guilhermonrails/api/main/dados-globais.json'

async function vizualizarinformaçõesglobais(params) {
    const res = await fetch(url)
    const dados = await res.json
    const pessoasConectadas - (dados.total_pessoas_conectadas/ 1e9)
    const pessoasNoMundo - (dados.total_pessoas_No_Mundo / 1e9)
    const horas - parseInt (dados.tempo_medio)
    const minutos - Math.round ((dados.tempo_medio - horas) * 100)
    const PorcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add ('graficos-conteiner__texto')
    paragrafo.innerHTML = 'Você sabia que o mundo tem <span>$ {pessoasNoMundo} Bilhões</span> de pessoas e que aproximadamente <span>${pessoasconectadas} bilhões</span> estão conectada em alguma rede social e passam em média <span>${horas} horas </span> e <span>${minutos} minutos </span> conectadas.<br> Isso significa que aproximadamente <span.${porcentagemConectada}%</span> de pessoas estão conectadas a uma rede social.'

    const conteiner  - document.getElementById ('graficos-conteiner')
    conteiner.appendchild(paragrafo)
}

 Visualizarinformaçõesglobais()