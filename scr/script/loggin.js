console.log("SCRIPT");

const credenciales =
    [
        { user: "Paco", pwd: "123" },
        { user: "Pedro", pwd: "123" },
        { user: "Karina", pwd: "123" }
    ];

const dtsCuentas =
    [
        { user: "Paco", saldo: "100" },
        { user: "Pedro", saldo: "200" },
        { user: "Karina", saldo: "300" }
    ];

console.log("SCRIPT");



var usuario = document.getElementById("usr").value;

console.log(usr)


console.log("SCRIPT");

function validar() {
    var usuario = document.getElementById("usr").value;
    var Contraseña = document.getElementById("pass").value;

    if (usuario == "uno" && Contraseña == "1234") {
        alert("Usuario y Contraseña validos");
    }
    else {
        alert("Verifique sus credenciales");
    }
}

function next() {
    location.href = ("./inicio.html")
}

function busca() {
    var tUser = document.getElementById("usr").value;
    var tPss = document.getElementById("pass").value;
    const resBusca = credenciales.find( credencial => credencial.user == tUser)
   
    if (resBusca != null && resBusca.pwd == tPss ) {
        alert("Usuario y Contraseña validos");
        location.href = ("./inicio.html")
    }
    else {
        alert("Verifique sus credenciales");
    }
    console.log(resBusca)
}
