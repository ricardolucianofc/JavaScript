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
