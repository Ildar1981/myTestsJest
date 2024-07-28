// functions.js

/**
 * Находит максимальное значение в массиве
 * @param {number[]} arr - массив чисел
 * @returns {number} - максимальное значение
 */
function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    return Math.max(...arr);
}

/**
 * Фильтрует четные числа из массива
 * @param {number[]} arr - массив чисел
 * @returns {number[]} - массив четных чисел
 */
function filterEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    return arr.filter(num => num % 2 === 0);
}

/**
 * Суммирует элементы массива
 * @param {number[]} arr - массив чисел
 * @returns {number} - сумма элементов
 */
function sumArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    return arr.reduce((acc, num) => acc + num, 0);
}
module.exports = { findMax, filterEvenNumbers, sumArray };