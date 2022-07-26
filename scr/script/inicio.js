
const dtsCuentas =
[
    { user: "Paco", saldo: "100", id: "111" },
    { user: "Pedro", saldo: "200", id: "222" },
    { user: "Karina", saldo: "300", id: "333" }
];

recUser = sessionStorage.id;

let recDts = dtsCuentas.find(datos => datos.id == recUser)
let nombre = recDts.user;
let saldo = recDts.saldo;


const act_Nombre = document.getElementById('nom_user')
act_Nombre.innerHTML = nombre;

const act_Saldo = document.getElementById('saldo')
act_Saldo.innerText = saldo;

