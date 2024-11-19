import { Getcss, criandograficos, incluirtexto } from "./common.js"

async function RedesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: Getcss ('--bg-color'),
        paper_bgcolor: Getcss ('--bg-color'),
        height: 700,
        title: {
            Text: 'Redes sociais que os usuários mais gostam',
            x: 0
            font: {
                color: Getcss ('--primary-color'),
                family: Getcss('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: Getcss ('--primary-color'),
                size: 16
            }
        }
    }

    Criargrafico(data, layout)

    incluirtexto (`Embora o <span>Instagram</span> ocupe a quarta posição em termos de número total de usuários entre as redes sociais, destaca-se como a <span>preferida pelos usuários</span>. Supera até mesmo o <span>Facebook</span>, a plataforma com mais usuários, sendo a terceira opção mais apreciada pelos usuários. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo Instagram em comparação com outras redes sociais`)

}
RedesFavoritasMundo()
