function enviarCoordenadas() {
  // Captura as coordenadas de latitude e longitude do navegador do usuário
  let latitude = navigator.geolocation.getCurrentPosition(function(position) {
    return position.coords.latitude;
  });
  
  let longitude = navigator.geolocation.getCurrentPosition(function(position) {
    return position.coords.longitude;
  });
  
  // Cria um objeto XMLHttpRequest
  let xhttp = new XMLHttpRequest();
  
  // Define a URL da requisição AJAX
  let url = "ajaxPesquisa.php";
  
  // Define os parâmetros da requisição
  let params = "lat=" + latitude + "&long=" + longitude;
  
  // Define o método HTTP da requisição como POST
  xhttp.open("POST", url, true);
  
  // Define o tipo de conteúdo da requisição como application/x-www-form-urlencoded
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  // Define uma função callback para lidar com a resposta da requisição
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // A resposta da requisição está pronta e foi bem-sucedida
      console.log(this.responseText);
    }
  };
  
  // Envia a requisição com os parâmetros
  xhttp.send(params);
}

// Exemplo de uso da função, chamando a função enviarCoordenadas()
enviarCoordenadas();
