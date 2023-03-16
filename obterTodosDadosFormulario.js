function obterDadosFormulario(idFormulario) {
  // Obtém o formulário pelo ID
  let formulario = document.getElementById(idFormulario);
  
  // Inicializa a string de parâmetros
  let parametros = "";
  
  // Itera sobre todos os campos do formulário
  for (let i = 0; i < formulario.elements.length; i++) {
    // Obtém o nome e o valor do campo atual
    let nomeCampo = formulario.elements[i].name;
    let valorCampo = formulario.elements[i].value;
    
    // Se o campo atual tem um nome, adiciona-o à string de parâmetros
    if (nomeCampo != "") {
      if (parametros != "") {
        parametros += "&";
      }
      parametros += encodeURIComponent(nomeCampo) + "=" + encodeURIComponent(valorCampo);
    }
  }
  
  // Retorna a string de parâmetros
  return parametros;
}

// Exemplo de uso da função
let formulario = document.getElementById("meuFormulario");
let dados = obterDadosFormulario(formulario.id);
console.log(dados);
