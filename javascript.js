/*ejercicio 1*/

function CalculadoraEdad() {
  const nombre= window.prompt("ingrese su nombre");
  const fecha= window.prompt("ingrese su fecha || AAAA-MM-DD");
  let div  = document.getElementById("resultado");
    let hoy = new Date()
    let fechaNacimiento = new Date(fecha)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }

    div.innerHTML = "hola "+ nombre +"  tu edad es: "+edad ;
  }

/*ejercicio 2*/ 

function frutaslocas(){
  let contador=0;
  let fruta = window.prompt("ingrese la frutiloca");
  let div  = document.getElementById("resultado");
  const fruteriadeestanca = ["banana","manzana","naranja","durazno","uva","melon","sandia","caki","coco","damasco"];
  let frutaencontrada = fruteriadeestanca.find(frutabuscar => frutabuscar == fruta);
  if (fruta == frutaencontrada) div.innerHTML = "si tenemos esa maldita " + fruta;
    else div.innerHTML =  "no tenemos ese " + fruta;
     
}


//3

function comparar(){const num=10
const num2=10.5
  num=="10"  //solo compara si los 2 dicen lo mismo, en este caso si los 2 son 10, pero no importa el tipo de dato
if (num=="10"){
  console.log("true")
}else{
  console.log("false")
  }
  //////////////////// 
  num==="10"   //aca compara tambien si son el mismo tipo de dato, en este caso no, ya que uno es sting y otro number.
  if (num==="10"){
    console.log("true")
  }else{
    console.log("false")
    }

 
//C)es de tipo float.

if (true==1){ //d) si, en javascrpit true = 1
  console.log("true")
}else{
console.log("false")
}
}

comparar(num)
/**/

////////////4


function obj(){
  const ciudad = {
    nombre: window.prompt("ingrese el nombre de la ciudad") ,
    fechaFundacion: window.prompt("ingrese la fecha de su fundacion") ,
    poblacion: window.prompt("ingrese la poblacion"),
    extencion: window.prompt("ingrese la extencion de dicha ciudad")
     
  }
     let texto = ""
    let div = document.getElementById("resultado");
    for (const Propiedad in ciudad) {
      if (ciudad.hasOwnProperty(Propiedad)) {
        texto= texto + Propiedad + ": "+ciudad[Propiedad] + "<br>"
       
      }
      div.innerHTML= texto;
    }
    
}

////////////////////////////5
function numdupli(){



  
  num1 = window.prompt("ingrese un numero"),
   num2= window.prompt("ingrese otro numero"),
    num3= window.prompt("ingrese otro numero"),
    num4= window.prompt("ingrese otro numero"),
    num5= window.prompt("ingrese otro numero")
    let numeros = [num1, num2, num3, num4, num5];
 const newArray= duplicarArray(numeros)
let div = document.getElementById("resultado");
resultado.innerHTML= "numero original: " + numeros +"<br>" + "duplicados:" + newArray.join(", ")


}

function duplicarArray(array)
{
const duplicado = array.map(num => num*2)
return duplicado  
}




//////////////////////////////////////////////////6


function trianguloco(){
  let div = document.getElementById("resultado");
  const altura = prompt("Ingresa la altura del triángulo:");
    let asteriscos = '';

    for (let i = 1; i <= altura; i++) {
        asteriscos += '*'.repeat(i) + '<br>'; 
        resultado.innerHTML=(asteriscos);
    }

   
}


function trianguloco2(){
  let div = document.getElementById("resultado");
const altura = prompt("Ingresa la altura del triángulo:");
    let asteriscos = '';

    for (let i = 1; i <= altura; i++) {
        const espacios = '-'.repeat(altura - i);
        const asterisco = '*'.repeat(2 * i - 1);
        asteriscos += espacios + asterisco + espacios + '<br>';
        resultado.innerHTML=(asteriscos);
    }

   
}
/////////////////////////////////////////
function alvinYLasArdillas(){
  let div = document.getElementById("resultado");
    const listaNombres = prompt("Ingresa una lista de nombres separalos usando una coma (,):");
    const nombres = listaNombres.split(',').map(nombre => nombre.trim());
    const nombresConA = nombres.filter(nombre => nombre.charAt(0).toLowerCase() === 'a');
    resultado.innerHTML = `<h2>Nombres que comienzan con 'A':</h2><ul>${nombresConA.map(nombre => `<li>${nombre}</li>`).join('')}</ul>`;

}


//////////////////////////////

function replacePalabras() {
  let div = document.getElementById("resultado");
  const texto = prompt("Ingresa un texto:");
  const palabraABuscar = prompt("Ingresa la palabra que deseas reemplazar:");
  const palabraDeReemplazo = prompt("Ingresa la palabra de reemplazo:");
  const nuevoTexto = texto.replaceAll(palabraABuscar, palabraDeReemplazo);
  resultado.innerHTML = `<h2>Texto resultante:</h2><p>${nuevoTexto}</p>`;
}

////////////////////////////////////////////////////////

function gomadeborrar() {
  let div = document.getElementById("resultado");
  const texto = prompt("Ingresa un texto para borrar:");
  const numeroCaracteres = parseInt(prompt("cuantos caracteres desea borrar?"));
  const textoBorrado = texto.slice(0, numeroCaracteres);
  resultado.innerHTML = "<h3><se ah borrado el siguiente texto:</h3>" +textoBorrado;
}



///////////////////////////////////////////////////////////////
function supertextoseparador() {
  let div = document.getElementById("resultado");
  const elementos = prompt("Ingresa una lista de elementos y separelos por una coma (,)");
  const elementosSuperSeparados = elementos.split(',').map(elemento => elemento.trim()).join(' - ');
  resultado.innerHTML = `<h3>String con el super separador aplicado:</h3><p>${elementosSuperSeparados}</p>`;
}



//////////////////////////////////////////////////////////////////////
function Recaudodromo() {
  const pedido = prompt("Ingrese una lista de pedidos en el siguiente formato(objeto:precio, objeto:precio)");
  const pedidosArray = pedido.split(',').map(pedido => pedido.trim().split(':'));
  let totalMoney = 0;

  for (const pedido of pedidosArray) {
      const total = parseFloat(pedido[1]);
      if (!isNaN(total)) {
          totalMoney += total;
      }
  }

    resultado.innerHTML = `<h3>El recaudodromo calcula una recaudación total de:</h3><p>${totalMoney.toFixed(2)}</p>`;

}