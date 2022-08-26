function luidyMoura(quant) {

    let finalSeq = [];
    let value = quant % 1;
    let erro = "Favor inserir um número inteiro maior que 0."
    if (value == 0 && quant > 0) {
        for (i=0; i< quant; i++) {
            finalSeq[i] = i+1;
            if (finalSeq[i] % 9 == 0 ) {
                console.log(`div 9 ${i}, ${finalSeq[i]}`);
                if (finalSeq[i] % 5 == 0) {
                    finalSeq[i] = "LuidyMoura";
                    console.log(`${i}, ${finalSeq[i]}`);
                } else {
                    finalSeq[i] = "Moura";
                }
            } else if (finalSeq[i] % 5 == 0) {
                finalSeq[i] = "Luidy";
                console.log(`div 5 ${i}, ${finalSeq[i]}`);
            }
        }
        document.getElementById("seqResult").innerText = finalSeq.join(', ');
        return finalSeq;
    } else {
        document.getElementById("quant").value = '';
        document.getElementById("seqResult").innerText = '';
        alert(erro);
    }
}