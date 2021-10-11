//-----------------DESAFIO NRO 4. JUAN LUIS SILVA------------------------// 

//---------------------SIMULADOR INTERACTIVO-----------------------------//

//---------------CONVERTIDOR DE DÓLARES A BOLIVARES----------------------//

//(con parámetros)
let convertidor;
function multiplicarValorDolar ( valor1, valor2){
    convertidor= valor1 * valor2;
}
let productoUsa=parseInt(prompt("Bienvenido, por favor ingresa el Monto en Dólares del producto a Comprar"));
const moneda= 4.15;

multiplicarValorDolar(productoUsa,moneda);
alert("El Costo de tu producto en Bolívares es: "+convertidor+ " BsV")



//----------CÁLUCLO DEL IMPUESTO A COBRAR POR LA COMPRA DEL PRODUCTO-----------------//
let impuestoIva;
function multiplicarTax ( monto1, monto2){
    impuestoIva= monto1 * monto2;
}

let productoVez=parseInt(prompt("Ahora, por favor ingresa el Monto en Bolívares de tu producto"));
const impuesto= 0.18;

multiplicarTax(productoVez,impuesto);
alert("El impuesto a pagar por tu producto es: "+impuestoIva+ " BsV");



//-----------------------------------------------------------------------------------//
//---------ELECCIÓN DEL LUGAR DE ENVÍO MEDIANTE FUNCIÓN Y RETORNO--------------------//

function destinoWorld (texto1, texto2){
    let unionWorld = texto1+ " "+ texto2;
    return unionWorld;
}

let ciudad = prompt("Ahora, Por favor ingresa la ciudad de envío de tu producto (En vzla):"); 
let estado = prompt("También ingresa El Estado o Distrito a enviar");
let lugarDeEnvio = destinoWorld(ciudad, estado);
alert("Tu ciudad y Estado elegido para el envío en Venezuela es: "+ lugarDeEnvio);

//-----------------------------------------------------------------------------------//
//-------------------MENSAJE DE DESPEDIDA POR LA VISITA-----------------------------//
alert("Muchas Gracias por Visitarnos");





