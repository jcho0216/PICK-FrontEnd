const numbers = [2, 3, 4, 6, 8];
const arrayForConcat = [1, 2, 3, 4]; //concat함수에 사용될 배열
const moreThanFive = number => number > 5; //5보다 작은수
const addTwo = number => number + 1; //수에 1을 더한값

//map
function mapArray(transform, array) {
    let mapedArray = [];
    for(let i = 0; i < array.length; i++) {
        mapedArray.push(transform(array[i]));
    }
    return mapedArray;
}
console.log(mapArray(addTwo, numbers)); 

//filter
function filterArray(requirements, array) {
    let filteredArray = [];
    for(let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        if(requirements(currentItem)) {
            filteredArray.push(currentItem);
        }
    }
    return filteredArray;
}
console.log(filterArray(moreThanFive, numbers));

//concat
const concatArray = (array1, array2) => {
    let concatedArray = [
        ...array1,
        ...array2
    ];

    return concatedArray;
}
console.log(concatArray(numbers, arrayForConcat));
