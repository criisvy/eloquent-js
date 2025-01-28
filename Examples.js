// console.log("El futuro dice:", future());
// function future() {
//     return "Nunca tendrás autos voladores";
// }


// const power = (base, exponent) => {
   // if (exponent === 0) return 1 // condition to stop
   // return base * power(base, exponent - 1) // recursive function
// }

// console.log(power(2, 3))



// recursive function is a function that call itself with a condition to stop


// const sumInfinite = (val) => {    
   // if (val === 3) {
      //  return 'loop is finally ended'
   // }

   // return sumInfinite(val + 1) 
// }



// console.log(sumInfinite(1))

/* function encontrarSolucion(objetivo) {
    function encontrar(actual, historial) {
        if(actual === objetivo) {
            return historial;
        } else if (actual >objetivo) {
          return null; 
        } else {
        return encontrar(actual + 5, '(${historial} + 5)') ??
               encontrar(actual * 3, '(${historial} * 3)') ;
        }
    }
    return encontrar (1,"1");
}

console.log(encontrarSolucion(24)) */

function ruidosa(f) {
    return (...args) => {
      console.log("llamando con", args);
      let resultado = f(...args);
      console.log("llamado con", args, ", devolvió", resultado);
      return resultado;
    };
  }
  ruidosa(Math.min)(3, 2, 1);