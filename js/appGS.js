//Finish project



//Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal: ');

const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;



//Classes
class presupuesto {
     constructor(presupuesto) {
          this.presupuesto = Number(presupuesto);
          this.restante = Number(presupuesto);
     }
      //Method to subtract from the current budget
      presupuestoRestante(cantidad = 0){
           return this.restante -= Number(cantidad);
      }
}
500

//Interface class handles all HTML
class Interfaz{
     insertarPresupuesto(cantidad){
         const presupuestoSpan = document.querySelector('span#total');
         const restanteSpan = document.querySelector('span#restante');

         presupuestoSpan.innerHTML = `${cantidad}`;
         restanteSpan.innerHTML = `${cantidad}`;
     }

     imprimirMensaje(mensaje,tipo){
          const divMensaje = document.createElement('div');

          divMensaje.classList.add('text-center','alert');
          

          if(tipo === 'error'){
               divMensaje.classList.add('alert-danger');
          }else{
               divMensaje.classList.add('alert-success');
          }
          divMensaje.appendChild(document.createTextNode(mensaje));
          //Insert in to DOM

          document.querySelector('.primario').insertBefore(divMensaje, formulario);

          //Remove alert after 3 sec

          setTimeout(function(){
               document.querySelector('.primario .alert').remove();
               formulario.reset();
          },3000);
     }



     //Insert expenses to the list
     agregarGastoListado(nombre,cantidad){
          const gastosListado = document.querySelector('#gastos ul');

          //Create li
          const li = document.createElement('li');
          li.className = 'list-group-item d-flex justify-content-between align-items-center';

          //Insert expenses
          li.innerHTML = `
               ${nombre}
              <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>
          `;
          gastosListado.appendChild(li);
     }

     //Check the remaining budget
     presupuestoRestante(cantidad){
          const restante = document.querySelector('span#restante');
          

          //We read the remaining budget
          const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad)

          restante.innerHTML = `${presupuestoRestanteUsuario}`;

          this.comprobarPresupuesto();
     }


     //Change the remaining budget color
     comprobarPresupuesto(){
          const presupuestoTotal = cantidadPresupuesto.presupuesto;
          const presupuestoRestante = cantidadPresupuesto.restante;


          //Check 25% of spending
          if((presupuestoTotal / 4) > presupuestoRestante){
               const restante = document.querySelector('.restante');
                    restante.classList.remove('alert-success','alert-warning');
                    restante.classList.add('alert-danger');               
          }else if((presupuestoTotal / 2) > presupuestoRestante){
               const restante = document.querySelector('.restante');
                    restante.classList.remove('alert-success');
                    restante.classList.add('alert-warning'); 
          }
     }
}


//Event Listeners
document.addEventListener('DOMContentLoaded', function(){

     if(presupuestoUsuario === null || presupuestoUsuario === ''){
          window.location.reload();//Recharger page

     }else{
          //Instantiate a budget
          cantidadPresupuesto = new presupuesto(presupuestoUsuario);

          //Instantiate interface class
          const ui = new Interfaz();
          ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
          
     }
});

formulario.addEventListener('submit', function(e){
     e.preventDefault();
     

     //Read the expense form
     const nombreGasto = document.querySelector('#gasto').value;
     const cantidadGasto = document.querySelector('#cantidad').value;


     //Instantiate interface class
     const ui = new Interfaz();
     
     //Check that the fields are not empty
     if(nombreGasto === "" || cantidadGasto === ""){

          //2 parameters: msj and type
          ui.imprimirMensaje('Hubo un error :(','error');

     }else{

          //Print in the HTML
          ui.imprimirMensaje('Registro exitoso!! :D','success');
          ui.agregarGastoListado(nombreGasto, cantidadGasto);

          ui.presupuestoRestante(cantidadGasto);
     }
});