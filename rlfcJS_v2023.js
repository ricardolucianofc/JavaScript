// *********************************************************
// Retorna data da Pascoa ao informar o ano
// *********************************************************
function retDataPascoa(ano) {
  const a = ano % 19,
        b = Math.floor(ano / 100),
        c = ano % 100,
        d = Math.floor(b / 4),
        e = b % 4,
        f = Math.floor((b + 8) / 25),
        g = Math.floor((b - f + 1) / 3),
        h = (19 * a + b - d - g + 15) % 30,
        i = Math.floor(c / 4),
        k = c % 4,
        l = (32 + 2 * e + 2 * i - h - k) % 7,
        m = Math.floor((a + 11 * h + 22 * l) / 451),
        n = Math.floor((h + l - 7 * m + 114) / 31),
        p = (h + l - 7 * m + 114) % 31,
        dia = p + 1,
        mes = n;
  return new Date(ano, mes - 1, dia);
}

// *********************************************************
// Retorna data do Carnaval no Brasil ao informar o ano
// *********************************************************
function retDataCarnaval(ano) {
  let pascoa = retDataPascoa(ano);
  let dataCarnaval = new Date(pascoa.getTime());
  dataCarnaval.setDate(pascoa.getDate() - 47);
  return dataCarnaval;
}

// *********************************************************
// Retorna o nome do mês ao informar o numero do mes
// numCaracteres: é o numero de caracteres de retorno
// *********************************************************
function nomeDoMes(numMes, numCaracteres) {
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  if (numCaracteres === 0) {
    return meses[numMes-1];
  }
  return meses[numMes-1].substring(0, numCaracteres);
}

// *********************************************************
// Retorna a resposta depois de uma chamada Ajax
// arquivoDestino: caminho\arquivo do ajax
// parametros: String de paramentros do tipo GET
// callback: é a resposta impressa no ajax
// *********************************************************
function chamaAjax(arquivoDestino, parametros, callback) {
  let xhttp = new XMLHttpRequest();
  let url = arquivoDestino;
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let resposta = this.responseText;
      console.log(resposta);
      callback(resposta);
    }
  };

// *********************************************************
// Retorna a distancia em Km de 2 coordenadas geograficas
// lat1, lon1: coordenada geografica 1
// lat2, lon2: coordenada geografica 2
// numCaracteresDec: numero de caracteres decimais
// *********************************************************
function distanciaEmKm(lat1, lon1, lat2, lon2, numCaracteresDec) {
	function toRadians(degrees) {
		return degrees * (Math.PI/180);
	}
	lat1 = toRadians(lat1);
	lat2 = toRadians(lat2);
	lon1 = toRadians(lon1);
	lon2 = toRadians(lon2);
	const dist = 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1) + Math.sin(lat1) * Math.sin(lat2));
	return dist.toFixed(numCaracteresDec);
}

// *********************************************************
// Retorna o valor por extenso de um número de -999999 a 999999
// *********************************************************
function NumeroPorExtenso(x){
	function ValidaNumero(x){ return (IsNumeric(x)) ? (x >= -999999  && x <= 999999 ? true : false) : false; } //Valida se o valor informado é válido para a operação
	function IsNumeric(y) { return ((y-0)==y); } //valida se o valor é numérico
	function Troca(str, de, para){
		var pos = str.indexOf(de);
		while (pos > -1){
			str = str.replace(de, para);
			pos = str.indexOf(de);
		}
		return (str);
	}
	function Loop(Num){ //Lopping de validações caractere a caractere
		var Ext = "";
		var Tamanho = Num.length;	
		for(Posicao = 0; Posicao < Tamanho; Posicao++){
			if (Ext != "" && Num.charAt(Posicao) != "0"){ Ext += " e "; }
			Ext += NomeNumero(Num.charAt(Posicao), Posicao, Tamanho);		
		}
		return Ext;
	}
	function NomeNumero(Caractere, Posicao, Tamanho){ //Retorna o nome do número de acordo com a posição do mesmo
		var tampos = Tamanho + "-" + Posicao;
		switch(tampos){
			case "1-0":  tipo="U"; break;
			case "2-0":  tipo="D"; break;
			case "2-1":  tipo="U"; break;
			case "3-0":  tipo="C"; break;
			case "3-1":  tipo="D"; break;	
			case "3-2":  tipo="U"; break;
			case "4-0":  tipo="U"; break;
			case "4-1":  tipo="C"; break;
			case "4-2":  tipo="D"; break;				
			case "4-3":  tipo="U"; break;				
		}
		if(tipo == "U"){
			switch(Caractere){
				case "0": return ""; break;
				case "1": return "um"; break;
				case "2": return "dois"; break;
				case "3": return "tres"; break;
				case "4": return "quatro"; break;
				case "5": return "cinco"; break;
				case "6": return "seis"; break;
				case "7": return "sete"; break;
				case "8": return "oito"; break;
				case "9": return "nove"; break;			
			}
		}
		else if(tipo == "D" ){
			switch(Caractere){
				case "0": return ""; break;
				case "1": return "dez"; break;
				case "2": return "vinte"; break;
				case "3": return "trinta"; break;
				case "4": return "quarenta"; break;
				case "5": return "cinquenta"; break;
				case "6": return "sessenta"; break;
				case "7": return "setenta"; break;
				case "8": return "oitenta"; break;
				case "9": return "noventa"; break;			
			}
		}
		else if(tipo == "C"){
			switch(Caractere){
				case "0": return ""; break;
				case "1": return "cem"; break;
				case "2": return "duzentos"; break;
				case "3": return "trezentos"; break;
				case "4": return "quatrocentos"; break;
				case "5": return "quinhentos"; break;
				case "6": return "seissentos"; break;
				case "7": return "setecentos"; break;
				case "8": return "oitocentos"; break;
				case "9": return "novecentos"; break;			
			}
		}
	}
	function CorrigeNomeNumero(Nome){ //Corrige as descrições dos números por extenso
		Nome = (Nome == "" ? "zero" : Nome);
		Nome = Troca(Nome,"cem e","cento e");
		Nome = Troca(Nome,"dez e um","onze");
		Nome = Troca(Nome,"dez e dois","doze");
		Nome = Troca(Nome,"dez e tres","treze");
		Nome = Troca(Nome,"dez e quatro","quatorze");
		Nome = Troca(Nome,"dez e cinco","quinze");
		Nome = Troca(Nome,"dez e seis","dezesseis");
		Nome = Troca(Nome,"dez e sete","dezessete");
		Nome = Troca(Nome,"dez e oito","dezoito");
		Nome = Troca(Nome,"dez e nove","dezenove");
		return Nome;
	}

	if(!ValidaNumero(x)) { return "Número inválido\nApenas números entre -999999 e 999999"; }
	else{	
			var Ext = "";
			var negativo = (x < 0);
			var Num = Math.abs(x).toString();
			var Tamanho = Num.length;
			if(Tamanho > 3){
				var Milhar = Num.substring(0,Num.length - 3);
				var Centena = Num.substring(Num.length - 3, Num.length);
				Ext += Loop(Milhar) + " mil ";
				Centena = Loop(Centena);
				if(Centena != ""){ Ext += " e "; }
				Ext += Centena;		
			}
			else{ Ext += Loop(Num);	}

			return x + '\n' + CorrigeNomeNumero(Ext) + (negativo ? " negativo" : ""); }
}

function CapitalizePalavras(str) {
	return str 
	.toLowerCase()
	.split(' ')
	.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
	.join(' ');
}

function CorAleatoria() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function enviarCoordenadas() {
  let latitude = navigator.geolocation.getCurrentPosition(function(position) {
    return position.coords.latitude;
  });
  
  let longitude = navigator.geolocation.getCurrentPosition(function(position) {
    return position.coords.longitude;
  });
  
  let params = "lat=" + latitude + "&long=" + longitude;
  return params;
}


function GerarImagem64(){
	function convert(oldImag, callback) {
		var img = new Image();
		img.onload = function(){
			callback(img)
		}
		img.setAttribute('crossorigin', 'anonymous');
		img.src = oldImag.src;
	}
	function getBase64Image(img,callback) {
		convert(img, function(newImg){
			var canvas = document.createElement("canvas");
			canvas.width = newImg.width;
			canvas.height = newImg.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(newImg, 0, 0);
			var base64=canvas.toDataURL("image/png");
			callback(base64)
		})
	}	
	document.getElementById("imageid").src = document.getElementById("novaimagem").value;
	getBase64Image(document.getElementById("imageid"),function(base64){
		console.log(base64)
		txtBase64.value = base64;
	});
}

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

function replaceAll(str, needle, replacement) {
		var i = 0;
		while ((i = str.indexOf(needle, i)) != -1) {
			str = str.replace(needle, replacement);
		}				
		return str;
}

function maskCPFCNPJ(x){
x.value = x.value.replace(".","").replace(".","").replace("-","").replace("/","");
}

function validaCPFCNPJ(x){

	function TestaCPF(strCPF) {
		var Soma;
		var Resto;
		Soma = 0;	
		strCPF = strCPF.replace(".","").replace(".","").replace("-","").replace("/","");
		if (strCPF == "00000000000") return false;
		for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
		Resto = (Soma * 10) % 11;
		if ((Resto == 10) || (Resto == 11))  Resto = 0;
		if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
		Soma = 0;
		for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
		Resto = (Soma * 10) % 11;
		if ((Resto == 10) || (Resto == 11))  Resto = 0;
		if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
		return true;
	}

	function validarCNPJ(cnpj) { 
		cnpj = cnpj.replace(/[^\d]+/g,"");
		if(cnpj == "") return false;
		if (cnpj.length != 14) return false;
	 
		// Elimina CNPJs invalidos conhecidos
		if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || 
			cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || 
			cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || 
			cnpj == "99999999999999") return false;
			 
		// Valida DVs
		tamanho = cnpj.length - 2
		numeros = cnpj.substring(0,tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0)) return false;
			 
		tamanho = tamanho + 1;
		numeros = cnpj.substring(0,tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1)) return false;
			   
		return true;   
	}

	if(x.value.length!=0){
		x.value = x.value.replace(".","").replace(".","").replace("-","").replace("/","");
		if(x.value.length==14){
			if(!validarCNPJ(x.value)){alert("CNPJ inválido, digite novamente");x.value = "";x.focus();}	
			else{x.value = x.value.charAt(0)+ x.value.charAt(1)+"."+x.value.charAt(2)+x.value.charAt(3)+x.value.charAt(4)+"."+x.value.charAt(5)+x.value.charAt(6)+x.value.charAt(7)+"/"+x.value.charAt(8)+x.value.charAt(9)+x.value.charAt(10)+x.value.charAt(11)+"-"+x.value.charAt(12)+x.value.charAt(13);			}
		}
		else{	
			if(x.value.length==11){
				if(!TestaCPF(x.value)){alert("CPF inválido, digite novamente");x.value = "";x.focus();}
				else{x.value = x.value.charAt(0)+ x.value.charAt(1)+x.value.charAt(2)+"."+x.value.charAt(3)+x.value.charAt(4)+x.value.charAt(5)+"."+x.value.charAt(6)+x.value.charAt(7)+x.value.charAt(8)+"-"+x.value.charAt(9)+x.value.charAt(10);				}
			}
		}
		if(x.value.length!=0 && x.value.length!=14 && x.value.length!=11 && x.value.length!=18 ){
			alert("CPF/CNPJ inválido, digite novamente");x.value = "";x.focus();	
		}
	}	
}

//******************************************* 
// Valida se o e-mail possui formato adequado
//******************************************* 
function ValidaEmail(field) {
	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
	 
	if (!((usuario.length >=1) &&
		(dominio.length >=3) && 
		(usuario.search("@")==-1) && 
		(dominio.search("@")==-1) &&
		(usuario.search(" ")==-1) && 
		(dominio.search(" ")==-1) &&
		(dominio.search(".")!=-1) &&      
		(dominio.indexOf(".") >=1)&& 
		(dominio.lastIndexOf(".") < dominio.length - 1))) {

		alert("O e-mail informado possui formato invalido.\nFavor informar novamente!");
		field.value="";
	}
}

//******************************************* 
// Alterna entre visivel ou não um objeto 
//******************************************* 
	function ExibeOculta(obj){ 
		if(eval(obj).style.display=="none"){
			eval(obj).style.display="inline";                                                
		}
		else{
			eval(obj).style.display="none";
		}
	}

//******************************************* 
// Permite apenas a inserção de números
//******************************************* 
	function SomenteNumeros(e) {
		var charCode = e.charCode ? e.charCode : e.keyCode;
		// charCode 8 = backspace   
		// charCode 9 = tab
		if (charCode != 8 && charCode != 9) {
			// charCode 48 equivale a 0   
			// charCode 57 equivale a 9
			if (charCode < 48 || charCode > 57) {
				return false;
			}
		}
	}
//******************************************* 
// Permite apenas a inserção de números e uma única vírgula
//******************************************* 
	function SomenteNumerosEVirgula(e, valor){
		var tecla=(window.event)?event.keyCode:e.which;
		var negativos = 0;
		var virgulas = 0;
		for(i = 0; i < valor.length; i++){
			if(valor.charAt(i) == ","){
				virgulas++
			}
		}
		for(i = 0; i < valor.length; i++){
			if(valor.charAt(i) == "-"){
				negativos++
			}
		}
		if(tecla==44 && virgulas > 0){
			return false;
		}	
		else if(tecla>47 && tecla<58){
			return true;
		}
		else if(tecla == 45){
			if(negativos > 0){
				return false;
			}
			else{
				return true
			}
		}
		else{
			/* 44 = virgula */
			if (tecla==44 || tecla==8 || tecla==0){	
				return true;
			}
			else  return false;
		}
	}

//******************************************* 
// Ajusta formato de números com vírgula
//******************************************* 
	function AjustaNumero(valor){
		var primeira = valor.charAt(0);
		var ultima = valor.charAt(valor.length - 1);
		var retorno = valor
		var virgulas = 0;
		var negativos = 0;	

		if(retorno == "-"){ 
				retorno = ("0,00");
		}

		if(retorno == ","){ 
				retorno = ("0,00");
		}		// Se digitar só "," muda pra "0,00"
		else{
			if(primeira == ","){ 
					retorno = ("0" + valor.toString());
			}		// Se iniciar com "," insere um "0" na frente
			else{
					if(ultima == ","){ 
							retorno = (valor.toString() + "00");
					}		// Se terminar com  "," completa com mais "00"
			}
		}
		for(i = 0; i < retorno.length; i++){
			if(retorno.charAt(i) == ","){ virgulas++; }
		}
		if(virgulas == 0){ 
				retorno = (retorno.toString() + ",00");
		} 		// Completa com mais ",00"
		if(retorno.charAt(retorno.length - 2)==",") { 
				retorno = (retorno.toString() + "0");
		}
		if(retorno == ",00"){ 
			retorno = "0,00"; 
		} 
		for(i = 0; i < retorno.length; i++){
			if(retorno.charAt(i) == ","){ negativos++; }
		}
		if(negativos > 0){ 
			if(retorno.toString() == "-"){
				retorno ="0,00";
			}
		}	   
		return retorno;
	}
	