document.getElementById('btn1').onclick=function(){
    if(document.getElementById('a').checked)
    {
        swal('Excelente','Continúa a la siguiente pregunta', 'success');
    }
    if(document.getElementById('b').checked)
    {
        swal("Oops!", "Opcion Incorrecta! Vuelve a intentarlo", "error");
    }
    if(document.getElementById('c').checked)
    {
        swal("Oops!", "Opcion Incorrecta! Vuelve a intentarlo", "error");
    }

}

document.getElementById('btn2').onclick=function(){
    if(document.getElementById('a1').checked)
    {
        swal("Oops!", "Opcion Incorrecta! Vuelve a intentarlo", "error");
    }
    if(document.getElementById('b1').checked)
    {
        swal('Excelente','Continúa a la siguiente pregunta', 'success');
    }
    if(document.getElementById('c1').checked)
    {
        swal("Oops!", "Opcion Incorrecta! Vuelve a intentarlo", "error");
    }

}

document.getElementById('btn3').onclick=function(){
    if(document.getElementById('a2').checked)
    {
        swal("Oops!", "Opcion Incorrecta! Vuelve a intentarlo", "error");
    }
    if(document.getElementById('b2').checked)
    {
        swal("Oops!", "Opcion Incorrecta! Vuelve a intentarlo", "error");
    }
    if(document.getElementById('c2').checked)
    {
        swal('Excelente','Continúa a la siguiente pregunta', 'success');
    }

}

document.getElementById('btn4').onclick=function(){
    if(document.getElementById('a3').checked)
    {
        swal('Excelente','Felicitaciones!', 'success');
    }
    if(document.getElementById('b3').checked)
    {
        swal("Oops!", "Opcion Incorrecta! Vuelve a intentarlo", "error");
    }
    if(document.getElementById('c3').checked)
    {
        swal("Oops!", "Opcion Incorrecta! Vuelve a intentarlo", "error");
    }

}
