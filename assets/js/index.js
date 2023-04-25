const valorDolar=   794.64;
const valorEuro =   868.12;
const valorUf   =   35721.12;

//do {
//    var repite = true
//    var montoClp = prompt("ingrese un monto en pesos Chilenos");
//    if (montoClp === ""){
//        alert("El monto No puede estar vacio")
//    } else if (isNaN(montoClp)){
//        alert ("el monto debe ser numerico")
//    }else if (Number(montoClp) <= 0){
//        alert ("El monto debe ser mayor que cero")
//    } else {
//        repite = false
//    }
// } while (repite)

//var opcion = prompt (`
//Ingrese moneda de calculo
//1: UF
//2: Dolar Americano 
//3: Euro`) 

//console.log("Monto",montoClp);
//console.log ("Moneda Calculo",opcion);

//let result1 = calcular1(montoClp,opcion).toFixed(2);
//let result2 = calcular2(montoClp,opcion).toFixed(2);
//let result3 = calcular3(montoClp,opcion).toFixed(2);
//console.log("valores",result1,result2,result3);

//alert(result1);
//alert(result2);
//alert(result3);

function calcular1(MontoClp, opcion) {

    var resultado = 0;
    if (Number(opcion) === 1) {
        return MontoClp / valorUf
    } 
    if (Number(opcion) === 2) {
        return MontoClp / valorDolar
    } 
    if (Number(opcion) === 3) {
        return MontoClp / valorEuro
    }
    return ("error de Opcion")
}

function calcular2(MontoClp, opcion) {

    var resultado = 0;
    if (Number(opcion) === 1) {
        resultado=  MontoClp / valorUf
    } else if (Number(opcion) === 2) {
        resultado =  MontoClp / valorDolar
    } else if (Number(opcion) === 3) {
        resultado= MontoClp / valorEuro
    } else {
        resultado = "error de Opcion";
    }
    return resultado;
}   

function calcular3(MontoClp, opcion) {

    var resultado = 0 ;
    opcion = Number(opcion)
    switch (opcion) {
        case 1:
            resultado = MontoClp / valorUf
            break;
        case 2:
            resultado = MontoClp / valorDolar
            break;
        case 3:
            resultado = MontoClp / valorEuro
            break;
        default:
            resultado = "error de Opcion"
            break;
    }
    return resultado;
}



var cantidad = prompt("Ingrese cantidad de UF que desa calcular");
cantidad = Number(cantidad)
//for (let i = 1; i <= cantidad ;i+=1) {
//    var calculo = i * valorUf;
//    console.log( i,"  -  ", calculo)
//}

let i = 1;
while  (i <= cantidad) {
   var calculo = i * valorUf;
    console.log( i,"  -  ", calculo.toFixed(2))
    i++
}
   