

var hh = 0;
var mm = 0;
var ss = 0;

var cron;
var tempo = 1000; //Quantos milésimos valem 1 segundo?
var s = document.getElementById("iniciar-gren")

function start() {
    cron = setInterval(() => { timer(); }, tempo);
    document.getElementById("iniciar-gren").disabled = true
    document.getElementById("iniciar-gren").style.opacity = 0.5
    document.getElementById("pause-yellow").style.opacity = 10
    document.getElementById("stop-red").style.opacity = 10
}

//Pausa o temporizador
function pause() {
    clearInterval(cron)
    document.getElementById("iniciar-gren").disabled = false
    document.getElementById("pause-yellow").style.opacity = 0.5
    document.getElementById("iniciar-gren").style.opacity = 10
    document.getElementById("stop-red").style.opacity = 10
    
}

//Parar o temporizador e limpar as variáveis
function stop() {
    clearInterval(cron)
     hh = 0
     mm = 0
     ss = 0

     document.getElementById("counter").innerText = "00:00:00"
     document.getElementById("iniciar-gren").disabled = false
     document.getElementById("stop-red").style.opacity = 0.5
     document.getElementById("iniciar-gren").style.opacity = 10
     document.getElementById("pause-yellow").style.opacity = 10
}

//Faz a contagem do tempo e exibição
function timer() {
    
    ss++
    if(ss == 60) {
        ss = 0
        mm++
    
    if(mm == 60) {
        mm = 0
        hh++
     }
 }

 //Cria uma variável que recebe os valores tratados HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss) 
    document.getElementById("counter").innerText = format
}







