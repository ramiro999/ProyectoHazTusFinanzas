
document.getElementById('btn1').onclick=function(){
    
    if(document.getElementById('inlineRadio1').checked){
        actualizarVista1();
    }
    else if(document.getElementById('inlineRadio2').checked){
        actualizarVista2();
    }
    else if(document.getElementById('inlineRadio3').checked){
        actualizarVista3();
    }

    else{
        swal("Oops!", "Selecciona una personalidad!", "error");
    }
    
}
document.getElementById('btn2').onclick=function(){
    document.getElementById("test2").style.display = "none";
    document.getElementById("test1").style.display = "none";
    document.getElementById("test").style.display = "none";
}

const actualizarVista1=()=>{

    document.getElementById("test2").style.display = "block";
    document.getElementById("btn2").style.display = "block";
}

const actualizarVista2=()=>{
    
    document.getElementById("test1").style.display = "block";
    document.getElementById("btn2").style.display = "block";
}

const actualizarVista3=()=>{
    
    document.getElementById("test").style.display = "block";
    document.getElementById("btn2").style.display = "block";
}

