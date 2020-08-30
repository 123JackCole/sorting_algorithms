const testArray = [9, 1, 5, 10, 3, 2, 8, 4, 7, 6];

const compare = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

const swap = (arr, a, b) => {
    const temp = arr[a];
    arr[a] = b;
    arr[b] = temp;
}

const bubbleSort = (arr) => {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (compare(arr[j], arr[j + 1]) === 1) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort(testArray));



