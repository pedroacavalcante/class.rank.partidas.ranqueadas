function rankedHero(nome,saldoVitorias){
    let rank    

    if (saldoVitorias < 10) {
        rank = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        rank = "Bronze";  
    } else if (saldoVitorias >=21 && saldoVitorias <= 50) {
        rank = "Prata";
    } else if (saldoVitorias >=51 && saldoVitorias <= 80) {
        rank = "ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        rank = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        rank = "Lendário"
    } else {
        rank = "Imortal"
    } console.log(`O Herói de nome ${nome[0]} está com saldo de vitórias de ${nome[1]-nome[2]}, e está no nível ${rank}.`)
    }

    const heroi = ["Batman", 50, 10]
    const vitoriasXDerrotas = (heroi[1] - heroi[2])
 

    const heroi1 = ["Ronaldo", 70, 10]
    const vitoriasXDerrotas1 = (heroi1[1] - heroi1[2])

    const heroi2 = ["One Punch Man", 150, 0]
    const vitoriasXDerrotas2 = (heroi2[1] - heroi2[2])
    
    
rankedHero (heroi,vitoriasXDerrotas)
rankedHero (heroi1,vitoriasXDerrotas1)
rankedHero (heroi2,vitoriasXDerrotas2)


  


    








