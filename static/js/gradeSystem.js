function gradeSystem(grade) {

    let approval = "Aluno aprovado";
    let nextNumber = 0;
    let erro = "Inserir valores entre 0 e 100.";
    let repproval = "Aluno reprovado.";

    if (grade < 0 || grade > 100 || isNaN(grade) || grade == '') {
        document.getElementById("grade").value = '';
        document.getElementById("gradeResult").innerText = '';
        alert(erro);
    } else if (grade < 38) {
        document.getElementById("gradeResult").innerText =  grade + ". " + repproval;
        return repproval;
    } else {
        nextNumber = (Math.floor(grade / 5) + 1) * 5;
        if ((nextNumber - grade) < 3) {
            grade = nextNumber;
        }
        console.log(` ${nextNumber}, ${grade}`);
        document.getElementById("gradeResult").innerText = grade + ". " + approval;
        return approval;
    }
}