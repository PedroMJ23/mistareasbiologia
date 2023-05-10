const divPrueba = document.querySelector('.js');
const jsP = document.querySelector('.js_p');
const tareaBtn = document.querySelector('.jsBtn')


const mostrarTarea = ()=>{
    console.log('abriendo la tarea')
    jsP.classList.remove('hidden');
    tareaBtn.classList.add('hidden');

}


const carga1ro1ro = ()=>{
    tareaBtn.addEventListener('click', mostrarTarea)


  
}

function init(){

    carga1ro1ro();



}
init();