
// 1.  Hacer un programa que reciba 2 números del usuario y los sume. ✅ 

// Es una secuencia 
    //pedir 2 numeros
    /*
        num 1 -> prompt()   
        num2
        resultado = num1 + num2
    */


//TODO LO QUE VIENE EN PROMPTS O DEL USUARIO VIENE COMO STRING
//Vamos a convertir el texto en número
// parseInt

// let num1 = 0;
// let num2 = 0;
// let resultado = 0;



// numero1 = prompt('Ingrese el primer numero');
// numero2 = prompt('Ingrese el segundo numero');
// resultado = parseFloat;

// resultado = parseFloat(numero1) + parseFloat(numero2);

// alert('El Resultado de la suma es de: ' + numero1 + ' + ' + numero2 + ' = ' + resultado);



//---------------------------------------------------------------------------------------------



//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola' ✅ 

//condicionales cuando tenemos varias opciones

// let nombreUsuario = prompt('Ingrese su Nombre');
// // if -> si se cumple una condición haga
// // else -> si no se cumple haga otra cosa


// /* variable = '' -> False -> No
// variable = 'Jonathan' -> True -> si
// */ 

// if(nombreUsuario){
//     alert('Hola: ' + nombreUsuario);
//     console.log('Se Cumple la Condición');
// }else{
//     alert('Hola');
//     console.log('No se cumple la condición')
// }




//---------------------------------------------------------------------------------------------



//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado. ✅ 

// let numero = parseInt(prompt('Ingrese un número entero: '));

// for(let i = 0 ; i <= numero ; i++){
//     console.log(i);
// }



//---------------------------------------------------------------------------------------------


//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.  🙋‍♂️ 🙋‍♀️

// let texto = '';

// do{ //verificacion del texto
//     texto = prompt('Por favor ingresa un texto');
// }while (texto === null || texto.trim() === '' );

// Mostrar otra vez el texto
// alert('El texto ingresado Fue: ' + texto);

//---------------------------------------------------------------------------------------------



//5. Hacer un programa que muestre los días de la semana. ✅ 

/*
let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// mosntrando el arreglo 
console.log(diasSemana);
// monstrando un elemento dentro del arreglo, usando su indice
// monstrando un elemento dentro del arreglo 
console.log(diasSemana[0])
console.log(diasSemana[1])
console.log(diasSemana[2])
console.log(diasSemana[3])
console.log(diasSemana[4])
console.log(diasSemana[5])
console.log(diasSemana[6])

// OPCION OPTIMIZADA CON CICLOS
// forEach -> es un ciclo para recorrer arreglos de datos
// el ciclo termina cuando no hayan mas elementos dentro de mi arreglo de datos

// forEach() -> es un metodo UNICAMENTE PARA ARREGLOS
diasSemana.forEach(
    // funcion flecha -> FUNCIONES -> Acciones que se deben ejecutar
    (dia) => {
        console.log(dia);
    }
)
*/


//---------------------------------------------------------------------------------------------

//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número. 🙋‍♂️ 🙋‍♀️ 

// console.log('---------------- Operación Suma y Resta ----------------')

// let numero1 = parseFloat(prompt ('Ingresa un número: '));
// let numero2 = parseFloat(prompt ('Ingresa el otro número: '));

// console.log('La Suma de los numeros es: ' + numero1 + ' + ' + numero2 + ' = ' + (numero1+numero2));
// console.log('La Resta de los numeros es: ' + numero1 + ' - ' + numero2 + ' = ' + (numero1-numero2));


//---------------------------------------------------------------------------------------------


//7. Hacer una función que reciba un nombre, si existe nombre saludar por nombre de otra manera saludar 'Hola, desconocido' con Manejo de DOM. ✅ 

// no hay espacios entre el document, el punto y el metodo
//getElementById traer un elemento del HTML por su ID

// let nameInput = document.getElementById("nombre");
// console.log(nameInput);


// let saludoP = document.querySelector('.mostrarSaludo');
// console.log(saludoP);

// function saludarUsuario(){
//     let name = nameInput.value;
//     console.log(name)

//     let mensaje = '';
//     if(name){
//         mensaje =' Hola ' + name;
//         saludoP.textContent = mensaje;
//     }else {
//         mensaje = 'Hola Desconicido';
//         saludoP.textContent = mensaje;
//     }
// }






