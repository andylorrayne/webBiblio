var count= 2;
console.log("CARREGOU SCRIPT")

var ObjPessoas = [
	
	{
		usuario: "andy",
		senha : "123"
	},
	{
		usuario: "sam",
		senha : "456"
	},
	{
		usuario: "may",
		senha : "789"
	}


]

function loginform(){
	//deixar tudo em letra minuscula
	/*loginform1.usuario.value = loginform1.usuario.value.toLowerCase()
	loginform1.senha.value = loginform1.senha.value.toLowerCase()

     if (loginform1.usuario.value == "marta" && loginform1.senha.value == "123") {

     	location = "principal.html"
     }else{
     	loginform1.usuario.value=""
     	loginform1.senha.value=""
     	alert("Dados incorretos");

     }*/


     var usuario = document.getElementById("usuario").value
     var senha = document.getElementById("senha").value

     //alert("usuario é: " + usuario + "senha : " + senha);

     for (var i = 0; i < ObjPessoas.length; i++ ){
     	if (usuario == ObjPessoas[i].usuario && senha == ObjPessoas[i].senha) {
     		alert(usuario + " "+ "está logado!");
     		location="principal.html"
     		return 
     	}
     }
     usuario.value = ""
   	 senha.value=""
     alert("DADOS INCORRETOS");
}