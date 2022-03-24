//JUEGO
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
        $("#img1").show();
        $(this).addClass('marked');
        juegomaquina();
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda2").click(function(){
    if(document.getElementById("celda2").className != "celda marked"){
    $("#img2").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda3").click(function(){
    if(document.getElementById("celda3").className != "celda marked"){
    $("#img3").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda4").click(function(){
    if(document.getElementById("celda4").className != "celda marked"){
    $("#img4").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda5").click(function(){
    if(document.getElementById("celda5").className != "celda marked"){
    $("#img5").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda6").click(function(){
    if(document.getElementById("celda6").className != "celda marked"){
    $("#img6").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda7").click(function(){
    if(document.getElementById("celda7").className != "celda marked"){
    $("#img7").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda8").click(function(){
    if(document.getElementById("celda8").className != "celda marked"){
    $("#img8").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda9").click(function(){
    if(document.getElementById("celda9").className != "celda marked"){
    $(this).addClass('marked');
    $("#img9").show();
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

function getRandomChoice() {
    return Math.floor(Math.random() * (10 - 0)) + 0;
}

function juegomaquina(){
    try{
        contador=0;
        while(contador==0){
        randomChoice = getRandomChoice();
        if(document.getElementById("celda"+randomChoice).className == "celda"){
            $("#celda"+randomChoice).addClass('marked');
            mostrarX(randomChoice);
            contador++;
        }else{
            console.log("marked");
        }
    } 
    }catch{
        alert("Ha ocurrido un error refresque la pagia");
        location.reload();
    }  
}

function mostrarX(randomChoice){
    document.getElementById("celda"+randomChoice).innerHTML="<img src='./assets/equis.png' id='img"+randomChoice+"' class='img-fluid'>";
        $("#img"+randomChoice).show()
        $("#img"+randomChoice).animate({
            height: '5em',
            width: '5em'
        });
}