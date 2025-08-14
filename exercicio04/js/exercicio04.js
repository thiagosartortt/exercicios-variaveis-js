function DadosDoPaciente() {
    let nome = prompt("Digite o seu nome");
    let peso = parseFloat (prompt("Digite o seu peso").replace (",","."));
    let altura = parseFloat (prompt("Digite o sua altura").replace (",","."));
    
    let imc = (peso / (altura * altura)).toFixed(2);    
   
    alert("Nome: " + nome + "\nIMC: " + imc);
}

function DadosDeAltura() {
let altura = parseFloat (prompt("Digite a sua altura").replace (",","."));

alert("Altura: ");

}