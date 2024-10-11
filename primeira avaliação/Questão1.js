// questão 1

function calculadora(num1, num2, operacao) {
    if (operacao === 'soma') {
        return num1 + num2;
    } else if (operacao === 'subtração') {
        return num1 - num2;
    } else if (operacao === 'multiplicação') {
        return num1 * num2;
    } else if (operacao === 'divisão') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Erro: Divisão por zero.";
        }
    } else {
        return "Operação inválida.";
    }
}

console.log(calculadora(15, 5, 'soma'));          
console.log(calculadora(20, 5, 'subtração'));     
console.log(calculadora(5, 5, 'multiplicação')); 
console.log(calculadora(15, 5, 'divisão'));       
console.log(calculadora(5, 0, 'divisão'));       
console.log(calculadora(10, 5, 'modulo')); 
