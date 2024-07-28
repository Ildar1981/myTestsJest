const { findMax, filterEvenNumbers, sumArray } = require("../functions.js/functions");
describe('Тесты для функций', () => {
    test('findMax - находит максимальное значение в массиве', () => {
        expect(findMax([1, 2, 3, 4, 5])).toBe(5);
        expect(findMax([-1, -2, -3, -4, -5])).toBe(-1);
    });

    test('findMax - выбрасывает ошибку для пустого массива', () => {
        expect(() => findMax([])).toThrow('Input must be a non-empty array');
    });

    test('filterEvenNumbers - фильтрует четные числа', () => {
        expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
        expect(filterEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
    });

    test('filterEvenNumbers - выбрасывает ошибку для некорректного ввода', () => {
        expect(() => filterEvenNumbers('not an array')).toThrow('Input must be an array');
    });

    test('sumArray - суммирует элементы массива', () => {
        expect(sumArray([1, 2, 3, 4])).toBe(10);
        expect(sumArray([-1, -2, -3, -4])).toBe(-10);
    });

    test('sumArray - выбрасывает ошибку для некорректного ввода', () => {
        expect(() => sumArray('not an array')).toThrow('Input must be an array');
    });
});