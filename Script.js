var counter = window.document.getElementById('counter')
var start = window.document.getElementById('btstart')
var stop = window.document.getElementById('btstop')
var reset = window.document.getElementById('btreset')

var hh = 0 // incia em zero
var mm = 0 // incia em zero
var ss = 0 // incia em zero
var tempo = 1000 //1000 = 1 segundo
var cron

function botao1(){
      cron = setInterval(() => {timer();}, tempo) // executar a função a cada intervalo no tempo de execução
      document.getElementById("btstart").disabled = true  // desabilita o botao start quando for clicado
}

function botao2(){
    clearInterval(cron)
    document.getElementById("btstart").disabled = false; // não disabilita se clicado o stop
}

function botao3(){
    clearInterval(cron)
    hh = 0
    mm = 0
    ss = 0

    document.getElementById("btstart").disabled = false; // não disabilita se clicado o reset

    window.document.getElementById('counter').innerText = '00:00:00'

}

function timer(){

    ss++ // recebera sempre um novo valor quando cair no if
    if( ss == 60){ // se segundos for igual ao 60
        ss = 0
        mm++ // adiciona mais um min

        if(mm == 60){
            mm = 0
            hh++
        }

    }

    var format = (hh <10 ? '0' + hh : hh) + ':' + (mm<10 ? '0' + mm:mm) + ':' + (ss < 10 ? '0' + ss:ss) // mm menor 10 então coloque o zero antes mais os minutos se não só exiba os minutos
    document.getElementById('counter').innerText = format 
}