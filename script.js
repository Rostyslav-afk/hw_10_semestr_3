// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки
console.log("1 Завдання Колбек");

const defaultArray = [1, 11, 3, 2, 5, 18, 26]


const processArray = function (array, callback) {
    return callback(array)
}

const totalArray = function (array) {
    let total = 0;
    for (let i = 0; i < array.length; i += 1) {
        total += array[i]
    }
    return total
}

console.log(processArray(defaultArray, totalArray));

const minimumArray = function (array) {
    let minimum = array[0]
    for (let i = 0; i < array.length; i += 1) {
        if (minimum > array[i]) {
            minimum = array[i]
        }
    }
    return minimum
}

console.log(processArray(defaultArray, minimumArray));

const maximumArray = function (array) {
    let maximum = array[0]
    for (let i = 0; i < array.length; i += 1) {
        if (maximum < array[i]) {
            maximum = array[i]
        }

    }
    return maximum
}
console.log(processArray(defaultArray, maximumArray));

// Стрілкова функція
console.log("1 Завдання Стрілкова");

const secondArray = [1, 11, 3, 2, 5, 18, 26]

const secondProcessArray = (array, callback) => callback(array)

const Total = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i]
    }
    return sum
}
const Minimum = (arr) => Math.min(...arr);

const Maximum = (arr) => Math.max(...arr);

console.log(processArray(secondArray, getSum));
console.log(processArray(secondArray, getMin));
console.log(processArray(secondArray, getMax));