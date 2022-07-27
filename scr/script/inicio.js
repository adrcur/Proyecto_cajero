
const dtsCuentas =
    [
        { user: "Paco", saldo: "100", id: "111" },
        { user: "Pedro", saldo: "200", id: "222" },
        { user: "Karina", saldo: "300", id: "333" }
    ];

// Se recupera el id del la sesion 
recUser = sessionStorage.id;

// Se Recupera el Objeto con el Id 
let recDts = dtsCuentas.find(datos => datos.id == recUser)

// Se Cargan datos del nombre y Saldo 
let nombre = recDts.user;
let saldo = recDts.saldo;

// Se desplegan los Datos al HTML

// const act_Nombre = document.getElementById('nom_user')
// act_Nombre.innerHTML = nombre;

// Se obtiene el elemento del titulo para ser personalizado con loa informacion del usuario
const titulo = document.getElementById('titulo')
titulo.innerHTML = 'Bienvenido ' + nombre;

// Funcion para Mostrar el Saldo
function showSaldo() {

    const act_Saldo = document.getElementById('saldo')
    act_Saldo.innerText = "Saldo : $" + saldo;
}

// Funcion para deposito
function deposito() {

    // Se convierte el saldo en Entero para poder operar 
    let rSaldo = parseInt(saldo);
    console.log(rSaldo)

    // Se utiza la funcion parseInt() para ser utilizado en operaciones y validaciones 
    let dep = parseInt(prompt("Ingresa el Monto a Depositar "))
    console.log(dep);

    // Condicional para saber si es numerico lo ingresado
    if (isNaN(dep)) {

        alert("No es Valido");

    } else {

        // Valida que los depositos no tengan numero negativos y que cumpla con la regla de negocio
        if (dep < 1 || (dep + rSaldo) > 990) {

            alert("El Deposito NO es Valido");

        } else {

            let saldoNuevo = dep + rSaldo;
            saldo = String(saldoNuevo);
            console.log(saldoNuevo)
            showSaldo();

        }
    }
}

// Funcion para Retiro
function retiro() {

    // Se convierte el saldo en Entero para poder operar 
    let rSaldo = parseInt(saldo);
    console.log(rSaldo)

    // Se utiza la funcion parseInt() para ser utilizado en operaciones y validaciones 
    let dep = parseInt(prompt("Ingresa el Monto a Retirar "))
    console.log(dep);

    // Condicional para saber si es numerico lo ingresado
    if (isNaN(dep)) {

        alert("No es Valido");

    } else {
        
        // Valida que los depositos no tengan numero negativos y que cumpla con la regla de negocio
        if (dep < 1 || (rSaldo - dep) < 10) {

            alert("El Retiro NO es Valido");

        } else {

            let saldoNuevo = rSaldo - dep;
            saldo = String(saldoNuevo);
            console.log(saldoNuevo)
            showSaldo();

        }
    }
}
