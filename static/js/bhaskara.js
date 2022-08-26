function bhaskara(a, b, c) {
    let delta = 0.0;
    let results = [];
    let erro = "Delta é negativo.";
    let notNumber = "Favor inserir valores numéricos para a, b e c.";
    if (isNaN(a) || isNaN(b) || isNaN(c) || a == '' || b == '' || c == '') {
        document.getElementById("a").value = '';
        document.getElementById("b").value = '';
        document.getElementById("c").value = '';
        document.getElementById("result").innerText = '';
        alert(notNumber);
        results = notNumber;
    } else {
        delta = (b**2) - (4 * a * c);
        if (delta < 0) {
            document.getElementById("result").innerText = erro;
            results = erro;
        } else {
            results[0] = (-b + Math.sqrt(delta)) / (2*a);
            results[1] = (-b - Math.sqrt(delta)) / (2*a);

            document.getElementById("result").innerText = 'x\' = ' + results[0].toFixed(2) + ' e x\'\' = ' + results[1].toFixed(2);
        }
    }
    return results;
}