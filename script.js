// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки
console.log("1 Завдання Колбек");

const defaultArray = [1, 11, 3, 2, 5, 18, 26];


const processArray = function (array, callback) {
    return callback(array);
};

const totalArray = function (array) {
    let total = 0;
    for (let i = 0; i < array.length; i += 1) {
        total += array[i];
    }
    return total;
};

console.log(processArray(defaultArray, totalArray));

const minimumArray = function (array) {
    let minimum = array[0];
    for (let i = 0; i < array.length; i += 1) {
        if (minimum > array[i]) {
            minimum = array[i];
        }
    }
    return minimum;
};

console.log(processArray(defaultArray, minimumArray));

const maximumArray = function (array) {
    let maximum = array[0];
    for (let i = 0; i < array.length; i += 1) {
        if (maximum < array[i]) {
            maximum = array[i];
        }

    }
    return maximum;
};
console.log(processArray(defaultArray, maximumArray));

// Стрілкова функція
console.log("1 Завдання Стрілкова");

const secondArray = [1, 11, 3, 2, 5, 18, 26];

const secondProcessArray = (array, callback) => callback(array);

const Total = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
};
const getSum = function (arr) { return arr.reduce((acc, curr) => acc + curr) }
const getMin = function (arr) { return Math.min(...arr) }
const getMax = function (arr) { return Math.max(...arr) }

console.log(processArray(secondArray, getSum));
console.log(processArray(secondArray, getMin));
console.log(processArray(secondArray, getMax));

// Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:

// Додавання.
// Віднімання.
// Множення.
// Ділення.
console.log("2 Завдання Колбек");

const operate = (a, b, callback) => {
    return callback(a, b);
};

// Виклик функції з різними операціями
console.log(operate(10, 5, function (a, b) { return a - b })); // Віднімання
console.log(operate(10, 5, function (a, b) { return a + b })); // Додавання
console.log(operate(10, 5, function (a, b) { return a * b })); // Множення
console.log(operate(10, 5, function (a, b) { return a / b })); // Ділення


// Стрілкова функція
console.log("2 Завдання Стрілкова");

const secondOperate = (a, b, callback) => {
    return callback(a, b);
};

const minusFunction = (a, b) => {
    return a - b;
}

const plusFunction = (a, b) => {
    return a + b;
}

const multiplicationFunction = (a, b) => {
    return a * b;
}

const divisionFunction = (a, b) => {
    return a / b;
}

console.log(operate(10, 5, minusFunction));
console.log(operate(10, 5, plusFunction));
console.log(operate(10, 5, multiplicationFunction));
console.log(operate(10, 5, divisionFunction));