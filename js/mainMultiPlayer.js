var estadoPartida="NoTerminada"
var turno=0;

$(document).ready(function(){
    reiniciarJuego();
});


function reiniciarJuego(){
    for(var x=1;x<=9;x++){
        $("#img"+x).hide();
    } 
}

$("#resetButon").click(function(){
    reiniciarJuego();
});

$("#celda1").click(function(){
    if(document.getElementById("celda1").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda1").innerHTML='<img src="./assets/equis.png" id="img1" class="img-fluid">';
            $("#img1").show();
            $(this).addClass('marked');
            turno++;
        }
        else { //CIRCULO
            document.getElementById("celda1").innerHTML='<img src="./assets/circulo.png" id="img1" class="img-fluid">';
            $("#img1").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda2").click(function(){
    if(document.getElementById("celda2").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda2").innerHTML='<img src="./assets/equis.png" id="img2" class="img-fluid">';
            $("#img2").show();
            $(this).addClass('marked');
            turno++;
        }
        else{ //CIRCULO
            document.getElementById("celda2").innerHTML='<img src="./assets/circulo.png" id="img2" class="img-fluid">';
            $("#img2").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda3").click(function(){
    if(document.getElementById("celda3").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda3").innerHTML='<img src="./assets/equis.png" id="img3" class="img-fluid">';
            $("#img3").show();
            $(this).addClass('marked');
            turno++;
        }
        else{ //CIRCULO
            document.getElementById("celda3").innerHTML='<img src="./assets/circulo.png" id="img3" class="img-fluid">';
            $("#img3").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda4").click(function(){
    if(document.getElementById("celda4").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda4").innerHTML='<img src="./assets/equis.png" id="img4" class="img-fluid">';
            $("#img4").show();
            $(this).addClass('marked');
            turno++;
        }
        else{ //CIRCULO
            document.getElementById("celda4").innerHTML='<img src="./assets/circulo.png" id="img4" class="img-fluid">';
            $("#img4").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda5").click(function(){
    if(document.getElementById("celda5").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda5").innerHTML='<img src="./assets/equis.png" id="img5" class="img-fluid">';
            $("#img5").show();
            $(this).addClass('marked');
            turno++;
        }
        else{ //CIRCULO
            document.getElementById("celda5").innerHTML='<img src="./assets/circulo.png" id="img5" class="img-fluid">';
            $("#img5").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda6").click(function(){
    if(document.getElementById("celda6").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda6").innerHTML='<img src="./assets/equis.png" id="img6" class="img-fluid">';
            $("#img6").show();
            $(this).addClass('marked');
            turno++;
        }
        else{ //CIRCULO
            document.getElementById("celda6").innerHTML='<img src="./assets/circulo.png" id="img6" class="img-fluid">';
            $("#img6").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda7").click(function(){
    if(document.getElementById("celda7").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda7").innerHTML='<img src="./assets/equis.png" id="img7" class="img-fluid">';
            $("#img7").show();
            $(this).addClass('marked');
            turno++;
        }
        else{ //CIRCULO
            document.getElementById("celda7").innerHTML='<img src="./assets/circulo.png" id="img7" class="img-fluid">';
            $("#img7").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda8").click(function(){
    if(document.getElementById("celda8").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda8").innerHTML='<img src="./assets/equis.png" id="img8" class="img-fluid">';
            $("#img8").show();
            $(this).addClass('marked');
            turno++;
        }
        else{ //CIRCULO
            document.getElementById("celda8").innerHTML='<img src="./assets/circulo.png" id="img8" class="img-fluid">';
            $("#img8").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda9").click(function(){
    if(document.getElementById("celda9").className != "celda marked"){
        if(turno%2==0){ //EQUIS
            document.getElementById("celda9").innerHTML='<img src="./assets/equis.png" id="img9" class="img-fluid">';
            $("#img2").show();
            $(this).addClass('marked');
            turno++;
        }
        else{ //CIRCULO
            document.getElementById("celda9").innerHTML='<img src="./assets/circulo.png" id="img9" class="img-fluid">';
            $("#img9").show();
            $(this).addClass('marked');
            turno++
        }
    }else{
        alert("Esta celda ya esta marcada");
    }
});
