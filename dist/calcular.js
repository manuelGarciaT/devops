export function sumar(num1, num2) {
    return num1 + num2;
}
export function restar(num1, num2) {
    return num1 - num2;
}
export function dividir(num1, num2) {
    if (num1 === null || num1 === undefined || typeof num1 === 'string') {
        return;
    }
    if (num2 === 0 && num1 === 0) {
        throw new Error('No se puede dividir por 0');
    }
    return num1 / num2;
}
export function multiplicar(num1, num2) {
    if (num1 === null || num1 === undefined) {
        return;
    }
    return num1 * num2;
}
//# sourceMappingURL=calcular.js.map