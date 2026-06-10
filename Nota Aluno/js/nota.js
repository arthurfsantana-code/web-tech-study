function resultadoNota() {
 
    let nota = Number(document.getElementById("input-nota").value);
    let resultado = document.getElementById("resultado");
 
    if (nota >= 6) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }
 
}