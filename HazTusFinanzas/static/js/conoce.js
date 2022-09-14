var restante=0;

document.getElementById('btn1').onclick=function(){
    let presupuesto = parseInt(document.querySelector("#presupuestoini").value);
    
    if(presupuesto<1 || isNaN(presupuesto)){
        mostrarError("error_presupuesto","Cantidad invalida");
        return;
    }
    localStorage.setItem("presupuesto",presupuesto);
    localStorage.setItem("gastos",JSON.stringify([]));
    actualizarVista();
}

const actualizarVista=()=>{
    let presupuesto = localStorage.getItem("presupuesto");
    restante = presupuesto;

    let divPregunta = document.querySelector("#pregunta");
    let divGastos = document.querySelector("#Gastos");
    let divControlGastos = document.querySelector("#ControlGastos");
   
    let controlGastos = `<div class="gastos-realizados">
                        <h6>Listado de Gastos<\h6>
                        <div class="alert alert-primary" role="alert">
                        Presupuesto: $${presupuesto}</div>
                        <div class="alert alert-warning" role="alert">
                        Restante: $${presupuesto}</div>
                        </div>`;
    divControlGastos.innerHTML=controlGastos; 
    refrescarListado();
    
  
}

const mostrarError=(elemento)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML = swal("Oops!", "Digita una cantidad aceptable", "error");
    
}

document.getElementById('btn2').onclick=function(){
    let tipoGasto=document.querySelector("#tipoGasto").value;
    let cantidad=parseInt(document.querySelector("#cantidadGasto").value);

    if(cantidad<1 || isNaN(cantidad) || tipoGasto.trim()===''){
        return mostrarError();
    }
    if(cantidad>restante){
        return mostrarError();
    }
    let nuevoGasto={
        tipoGasto,
        cantidad
    }
    let gastos=JSON.parse(localStorage.getItem("gastos"));
    gastos.push(nuevoGasto);
    localStorage.setItem("gastos", JSON.stringify(gastos));
    refrescarListado();
    document.querySelector("#formGasto").reset();
}

const refrescarListado=()=>{
    let presupuesto=localStorage.getItem("presupuesto");
    let gastos=JSON.parse(localStorage.getItem("gastos"));

    let totalGastos=0;
    let listadoHTML=``;
    gastos.map(gasto=>{
        listadoHTML+=`
                        <li class="list-group-item list-group-item-info">
                        <p>${gasto.tipoGasto}
                        <span class="input-group-text"> $${gasto.cantidad}</span>
                        </p>
                        </li>`;
        totalGastos+=parseInt(gasto.cantidad);
    });
    console.log("Total de gastos:" +totalGastos);

    restante=presupuesto-totalGastos;

    let divControlGastos=document.querySelector("#ControlGastos");

    divControlGastos.innerHTML=``;

    if((presupuesto/4)>restante){
        clase="alert alert-danger";
    } else if((presupuesto/2)>restante){
        clase="alert alert-warning";
    } else{
        clase="alert alert-success";
    }

    divControlGastos.innerHTML=`<div class="gastos_realizados">
                                <h6>Listado de Gastos</h6>
                                ${listadoHTML}
                                <div class="alert alert-primary">
                                Presupuesto:$${presupuesto}</div>
                                <div class="${clase}">
                                Restante:$ ${restante}</div>
                                

                                </div>

                                `;

}

