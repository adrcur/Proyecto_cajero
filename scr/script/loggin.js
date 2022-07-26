console.log("SCRIPT");

const credenciales =
    [
        { user: "Paco", pwd: "123", id: "111" },
        { user: "Pedro", pwd: "123", id: "222" },
        { user: "Karina", pwd: "123", id: "333" }
    ];

console.log("SCRIPT");

function validar() {
    let tUser = document.getElementById("usr").value;
    let tPss = document.getElementById("pass").value;
    let resBusca = credenciales.find(credencial => credencial.user == tUser)

    console.log(resBusca)

    if (resBusca != null && resBusca.pwd == tPss) {
        alert("Usuario y Contraseña validos");
        sessionStorage.id = resBusca.id;

        // sessionStorage.Apellido = 'Sesion'
        // lastNameS  = sessionStorage.Apellido

        // localStorage.Apellido = 'local'
        // lastNameL  = localStorage.Apellido

        location.href = ("./inicio.html")
    }
    else {
        alert("Verifique sus credenciales");
    }
    // console.log(resBusca)
}

console.log("SCRIPT - FIN ");
