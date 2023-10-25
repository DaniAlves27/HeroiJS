function nivelRakeado (vitorias,derrotas){

    let saldoVitorias = vitorias-derrotas
    let rank = "";

    if (rank < 10) {
        rank = "Ferro";
     } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        rank = "Bronze";
     } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        rank = "Prata";
     } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        rank = "Ouro";
     } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        rank = "Diamante";
     } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        rank= "Lendário";
     } else if (saldoVitorias >= 101) {
        rank= "Imortal";
     }
    return `O Herói tem de saldo de ${saldoVitorias} vitórias, está no Rank de ${rank}`;
}

let gamer = nivelRakeado(20, 15);
console.log(gamer);




