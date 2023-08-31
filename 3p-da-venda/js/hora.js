let dia = document.querySelector('#dia')
let hora = document.querySelector('#hora')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

let diaEscolhido = 18 - 1
let horaEscolhido = 19 - 1
let minutosEscolhido = 60 - 1
let segundosEscolhido = 60 - 1

setInterval(
    function(){
        var data = new Date();
        let diaDaMaquina = data.getDate()
        let horaDaMaquina = data.getHours()
        let minutosDaMaquina = data.getMinutes()
        let segundosDaMaquina = data.getSeconds()

        if (segundosEscolhido == 0){
            minutosEscolhido--
            if (minutosEscolhido == 0){
            horaEscolhido--
                if (horaEscolhido == 0){
                    diaEscolhido--
                }
            }
        }
        if (minutosEscolhido == 0){
            horaEscolhido--
            if (horaEscolhido == 0){
                diaEscolhido--
            }
        }
        if (horaEscolhido == 0){
            diaEscolhido--
        }

        if (dia.innerHTML == 60){
            dia.innerHTML = 0
        }
        if (horaDaMaquina.innerHTML == 60){
            horaDaMaquina.innerHTML = 0
        }
        if (minutosDaMaquina.innerHTML == 60){
            minutosDaMaquina.innerHTML = 0
        }
        if (segundos.innerHTML == 60){
            segundos.innerHTML = 0
            console.log('entrou')   
        }
        dia.innerHTML = diaEscolhido - diaDaMaquina
        hora.innerHTML = horaEscolhido - horaDaMaquina
        minutos.innerHTML = minutosEscolhido - minutosDaMaquina 
        segundos.innerHTML = segundosEscolhido - segundosDaMaquina 
        if (dia.innerHTML < 10){
            dia.innerHTML = '0'+dia.innerHTML
        }
        if (hora.innerHTML < 10){
            hora.innerHTML = '0'+hora.innerHTML
        }
        if (minutos.innerHTML < 10){
            minutos.innerHTML = '0'+minutos.innerHTML
        }
        if (segundos.innerHTML < 10){
            segundos.innerHTML = '0'+segundos.innerHTML
        }
    }, 1000);
