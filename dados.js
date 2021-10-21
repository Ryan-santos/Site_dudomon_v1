
async function fetchDadosSubWars() {
    try {
        const response = await fetch('https://sheetdb.io/api/v1/r9me7f6gbeomy')
        const data = await response.json()
        var listaMvpSubwars = data
        imprimir(listaMvpSubwars)

    } catch (error) {
      console.log(error)
    }
}

fetchDadosSubWars()

function imprimir(listaMvpSubwars) {
      var div = document.querySelector('.jogadores_mvp_subwars')
      div.innerHTML = ""
    
      for (var x = 0; x < listaMvpSubwars.length; x++) {
        let tagLi = document.createElement('li')
        let tagH5 = document.createElement('h5')
        let tagH6 = document.createElement('h6')

        tagH5.innerHTML = listaMvpSubwars[x].Numero
        tagH6.innerHTML = listaMvpSubwars[x].NickName + "<span>|</span>" + listaMvpSubwars[x].data + "<span>|</span>" + listaMvpSubwars[x].Partida
        
        tagLi.appendChild(tagH5)
        tagLi.appendChild(tagH6)
        div.appendChild(tagLi)
    }
    

    var mes = listaMvpSubwars[0].Mes;
    subWarsMes.innerHTML=mes;

    numeroDeJogadores = listaMvpSubwars.length;
    numeroDeJogadoresMvp.innerHTML=numeroDeJogadores;
}

function sortearNumero(){
    numeroAleatorio=Math.floor(Math.random()*numeroDeJogadores + 1);
    console.log(numeroAleatorio)
    resultado.innerHTML=numeroAleatorio
}  



/* funcao para pegar os dados da planilha premiados */
async function fetchDadosPreiados() {
  try {
      const response = await fetch('https://sheetdb.io/api/v1/w6xbcg4coqagm')
      const data = await response.json()
      var listaPreiados = data
      imprimirPremiados(listaPreiados)

  } catch (error) {
    console.log(error)
  }
}

fetchDadosPreiados()

function imprimirPremiados(listaPreiados) {
    var div = document.querySelector('.jogadoresPremiados')
    div.innerHTML = ""

    let tagTr1 = document.createElement('tr')

    let tagTh1 = document.createElement('th')
    let tagTh2 = document.createElement('th')
    let tagTh3 = document.createElement('th')
    let tagTh4 = document.createElement('th')

    tagTh1.innerHTML = "Nick do ganhador"
    tagTh2.innerHTML = "Premiação + valor"
    tagTh3.innerHTML = "Data"
    tagTh4.innerHTML = "Meio de ganho"

    tagTh3.classList.add('tela_480')
    tagTh4.classList.add('tela_600')

    tagTr1.appendChild(tagTh1)
    tagTr1.appendChild(tagTh2)
    tagTr1.appendChild(tagTh3)
    tagTr1.appendChild(tagTh4)

    div.appendChild(tagTr1)

    for (var x = 0; x < listaPreiados.length; x++) {
      let tagTr = document.createElement('tr')
      
      let tagTd1 = document.createElement('td')
      let tagTd2 = document.createElement('td')
      let tagTd3 = document.createElement('td')
      let tagTd4 = document.createElement('td')

      tagTd1.innerHTML = listaPreiados[x].NickName
      tagTd2.innerHTML = listaPreiados[x].Premiacao
      tagTd3.innerHTML = listaPreiados[x].Data
      tagTd4.innerHTML = listaPreiados[x].MeioDeGanho

      tagTd3.classList.add('tela_480')
      tagTd4.classList.add('tela_600')
      
      tagTr.appendChild(tagTd1)
      tagTr.appendChild(tagTd2)
      tagTr.appendChild(tagTd3)
      tagTr.appendChild(tagTd4)
      
      div.appendChild(tagTr)
  }

}