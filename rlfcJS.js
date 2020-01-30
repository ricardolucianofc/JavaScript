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

	function replaceAll(str, needle, replacement) {
		var i = 0;
		while ((i = str.indexOf(needle, i)) != -1) {
			str = str.replace(needle, replacement);
		}				
		return str;
}











