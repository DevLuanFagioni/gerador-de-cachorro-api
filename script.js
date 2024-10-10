const botao = document.getElementById('gerar')
const apiURL = 'https://dog.ceo/api/breeds/image/random'

async function buscarCachorro() {
  try {
    const resposta = await fetch(apiURL)
    const dados = await resposta.json()
    if (!resposta.ok) {
      throw new Error("Erro ao gerar cachorro")
    }

    let cachorro = document.getElementById("cachorro")
    cachorro.src = dados.message
    cachorro.style.width = "300px"
    
  } catch (error) {
    console.log(error.message)
  }
}
botao.addEventListener("click", buscarCachorro)