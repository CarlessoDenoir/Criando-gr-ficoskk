    import { Getcss, tickconfig } from "./common.js";
async function quantidadedeUsuariosPorRede() {
    const url = 'https://raw.githubcontent.com/guilherrmeonrails/api/main/numero-usuarios.json'
    const res = await fetch (url)
    const dados = await res.json()
    const nomesDasRedes = Object.keys (dados)
    const quantidadeDeusuarios = Object.values (dados)

    const data = [
    {
        x: nomesDasRedes,
        y: quantidadeDeusuarios,
        type: 'bar',
        marker {
            color: Getcss ('--primaryColor')
        }
    }
]

const layout = {
    plot_bgcolor: Getcss ('--bg-color'),
    papper_bgcolor: Getcss('--bg-color'),
    title: {
        Text: "redes sociais com mais usuários",
        x: 0,
        font: {
            color: Getcss ('--primary-color'),
            size: 30,
            font: Getcss  ('--font')
        }
    },
    xaxis: {
        tickfront: tickconfig
        title: {
          Text: 'nomes Das Redes',
          font: {
            color: Getcss('--secundary-color')
          }
        }
    },
yaxis: {
    tickfont: tickconfig,
    title: {
    Text: 'Bilhões de usuários ativos',
    font: {
        color: Getcss('--secundary-color')
    }    
}
}
}
const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById ('graficos-container').appendChild(grafico
plotly.newplot(grafico,data,layout)
)
quantidadedeUsuariosPorRede()