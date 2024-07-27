let jugador1 = 0;
let jugador2 =0;

let marcador = true;

function partido (){
    while(marcador){
        let puntaje = Number(prompt("¡quien marca punto?"));
        if(puntaje === 1){
            jugador1 = jugador1 + 15; 
            
        }else{
            if(jugador2 === 0){
                jugador2 = "love";
            }else if (jugador2 ===30){
                Number(jugador2) = jugador2 + 10;
            }else{
                jugador2 =+ 15; 

            }
            
            
        }
        console.log(jugador1 +" - "+ jugador2);
    }
}

partido()