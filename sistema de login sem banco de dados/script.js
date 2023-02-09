function login (){
    let username = document.getElementById("use")
    let usuario = username.value;

    let password = document.getElementById("pass")
    let pass =password.value;

    if (usuario == "izaque" && pass == 12345 ) {
         
        var container = document.getElementById("message");
        container.innerHTML = "Acesso Permitido";


    } else {

        var container = document.getElementById("message");
        container.innerHTML = "Acesso negado!";

    }


}
