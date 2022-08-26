function triangleTypes(side1, side2, side3) {

    let result = 'Estas medidas são de um triângulo ';
    let erro = 'Favor inserir valores numéricos';

    if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 == '' || side2 == '' || side3 == '') {
        document.getElementById("side1").value = '';
        document.getElementById("side2").value = '';
        document.getElementById("side3").value = '';
        document.getElementById("classification").innerText = '';
        alert(erro);
    } else {
        if (side1 == side2 && side1 == side3) {
            result = result + 'equilátero.';
        } else if (side1 != side2 && side1 != side3 && side2 != side3) {
            result = result + 'escaleno.';
        } else {
            result = result + 'isósceles.';
        }
        console.log(result);
        document.getElementById("classification").innerText = result;
    }

}