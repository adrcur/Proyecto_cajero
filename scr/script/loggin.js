console.log("SCRIPT");

// const credenciales =
//     [
//         { user: "Paco", pwd: "123", id: "111" },
//         { user: "Pedro", pwd: "123", id: "222" },
//         { user: "Karina", pwd: "123", id: "333" }
//     ];

// Funcion para recuperar las credenciales del localSotarage
var cdr = JSON.parse(localStorage.getItem('credenciales'));

console.log("SCRIPT");

// Funcion Para Validad Usuario y Contraseña
function validar() {
    let tUser = document.getElementById("usr").value;
    let tPss = document.getElementById("pass").value;

    // Regresa el objeto encontrado 
    let resBusca = cdr.find(credencial => credencial.user == tUser);

    console.log(resBusca);

    //Validacion de que exita informacion y que coincida con la Contraseña
    if (resBusca != null && resBusca.pwd == tPss) {
        alert("Usuario y Contraseña validos");
        sessionStorage.id = resBusca.id;

        location.href = ("./inicio.html");
    }
    else {
        alert("Verifique sus credenciales");
    }

}

console.log("SCRIPT - FIN ");


function borrar_datos() {
    // Se borra los datos de localStorage
    localStorage.clear();
    location.href = ("./loggin.html");
}
