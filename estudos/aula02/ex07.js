async function carregarDados() {
  try {
    const resposta = await fetch("https://exemplo.com/api");
    const dados = await resposta.json(); 
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}
//a palavra-chave await dentro de uma função comum no codigo original//
