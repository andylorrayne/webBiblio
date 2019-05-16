var count= 2;

function validate(){
	var us = document.index.usuario.value
	var sh = document.index.senha.value
	var valid = false
	var usuarioArray = ["andy", "lorrayne"]
	var senhaArray = ["1234", "5678"]

	for (var i = 0; i < usuarioArray.lenght; i++) {
		if((us == usuarioArray[i]) && (sh == senhaArray[i])){

			valid = true
			break
		}
	}

	if(valid){
		alert("Login feito com sucesso!")
		window.location ="./sistem/principal.html"
		return false
	}



}
