//Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal: ');
let cantidadPresupuesto;



//Clases
class presupuesto {
     constructor(presupuesto) {
          this.presupuesto = Number(presupuesto);
          this.restante = Number(presupuesto);
     }
      //Metodo para ir restando del presupuesto actual
      presupuestoRestante(cantidad = 0){
           return this.restante -= Number(cantidad);
      }
}
500

//Clase de interfaz maneja todo del HTML

class Interfaz{
     insertarPresupuesto(cantidad){
         const presupuestoSpan = document.querySelector('span#total');
         const restanteSpan = document.querySelector('span500#restante');

         presupuestoSpan.innerHTML = `${cantidad}`;
         restanteSpan.innerHTML = `${cantidad}`;
     }
}


//Event Listeners
document.addEventListener('DOMContentLoaded', function(){

     if(presupuestoUsuario === null || presupuestoUsuario === ''){
          window.location.reload();//Recarga la pagina

     }else{
          //Instanticiar un presupuesto
          cantidadPresupuesto = new presupuesto(presupuestoUsuario);
          //Instanciar la clase de interfaz
          const ui = new Interfaz();
          ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
          
     }
})