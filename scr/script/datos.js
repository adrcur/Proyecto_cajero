// Se Validan si existen los datos en el localStorage
var try_cdr = localStorage.getItem('credenciales');

var try_dts = localStorage.getItem('dtsCuentas');

// Si los datos no existen se crea y se almacenan en localStorage
if (try_cdr == null || try_dts == null) {
    console.log("Datos a ingresar");


    const credenciales =
        [
            { user: "Paco", pwd: "123", id: "111" },
            { user: "Pedro", pwd: "123", id: "222" },
            { user: "Karina", pwd: "123", id: "333" }
        ];


    const dtsCuentas =
        [
            { user: "Paco", saldo: "100", id: "111" },
            { user: "Pedro", saldo: "200", id: "222" },
            { user: "Karina", saldo: "300", id: "333" }
        ];


    // Se Almacena la informacion el localStorage para ser utilizada 
    localStorage.setItem('credenciales', JSON.stringify(credenciales));
    localStorage.setItem('dtsCuentas', JSON.stringify(dtsCuentas));


} else {
    console.log("Datos en sistema");
}

