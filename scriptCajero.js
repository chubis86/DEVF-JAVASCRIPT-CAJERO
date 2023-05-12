var cuentas = [
    { cuenta: "cuenta1", nombre: "Efrén", saldo: 200 },
    { cuenta: "cuenta2", nombre: "Efrén2", saldo: 290 },
    { cuenta: "cuenta3", nombre: "Efrén3", saldo: 67 }
];


//INICIALIZAMOS VALORES

let params = new URLSearchParams(location.search);
const cuenta = params.get('cuenta');

let nombre="";
let saldo=0;

for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].cuenta==cuenta){
        nombre=cuentas[i].nombre;
        saldo=cuentas[i].saldo;
    }
}

const saldoSpan = document.getElementById('saldo');
saldoSpan.innerHTML=saldo;

///////////////////////////////////////////////////////

/////////////PROCESAMIENTO DE MOVIMIENTOS///////////////
const movimientos= document.getElementById('movimientos');


//Función de INGRESAR MONTO
document.getElementById('botonMontoIngresar').addEventListener('click', function(){
    let montoIngreso=Number(document.getElementById('montoUsuarioInput').value);
    if(saldo+montoIngreso>990){
        document.getElementById('mensajeMovimientos').innerHTML="ERROR!!!! Tu saldo no puede exceder los $990.00";
        document.getElementById('movimientos').disabled= false;
        document.getElementById('botonMontoIngresar').disabled= true;
    }else{
        saldo+=montoIngreso;
        document.getElementById('mensajeMovimientos').innerHTML="Tu nuevo saldo es de $"+(saldo)+".00";
        document.getElementById('movimientos').disabled= false;
        document.getElementById('botonMontoIngresar').disabled= true;
        saldoSpan.innerHTML=saldo;
    }
    
});

//Función de RETIRAR MONTO
document.getElementById('botonMontoRetirar').addEventListener('click', function(){
    let montoRetiro=Number(document.getElementById('montoUsuarioInput').value);
    if(saldo-montoRetiro<10){
        document.getElementById('mensajeMovimientos').innerHTML="ERROR!!!! Tu saldo no puede ser menor que $10.00";
        document.getElementById('movimientos').disabled= false;
        document.getElementById('botonMontoRetirar').disabled= true;
    }else{
        saldo-=montoRetiro;
        document.getElementById('mensajeMovimientos').innerHTML="Tu nuevo saldo es de $"+(saldo)+".00";
        document.getElementById('movimientos').disabled= false;
        document.getElementById('botonMontoRetirar').disabled= true;
        saldoSpan.innerHTML=saldo;
    }
    
});


movimientos.addEventListener('change', procesar);

function procesar(){
    let movimiento=Number(movimientos.value);
    
    switch(movimiento){
        case 1:
            document.getElementById('montoUsuarioInput').disabled= true;
            document.getElementById('botonMontoIngresar').disabled= true;
            document.getElementById('botonMontoRetirar').disabled= true;
            document.getElementById('mensajeMovimientos').innerHTML="Tu saldo es de $"+saldo+".00";
            break;
        case 2:
            document.getElementById('mensajeMovimientos').innerHTML="";
            document.getElementById('montoUsuarioInput').disabled= false;
            document.getElementById('botonMontoIngresar').disabled= false;
            document.getElementById('botonMontoRetirar').disabled= true;
            document.getElementById('movimientos').disabled= true;
            break;

        case 3:
            document.getElementById('mensajeMovimientos').innerHTML="";
            document.getElementById('montoUsuarioInput').disabled= false;
            document.getElementById('botonMontoIngresar').disabled= true;
            document.getElementById('botonMontoRetirar').disabled= false;
            document.getElementById('movimientos').disabled= true;
            break;
        
        default:
            document.getElementById('mensajeMovimientos').innerHTML="SELECCIONA UNA OPCIÓN VÁLIDA";
            break;    
    }
}