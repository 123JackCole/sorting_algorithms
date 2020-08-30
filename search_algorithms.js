const testArray = [9, 1, 5, 10, 3, 2, 8, 4, 7, 6];

// helper methods

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
    arr[a] = arr[b];
    arr[b] = temp;
}

// algorithms

const bubbleSort = (arr) => {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compare(arr[j], arr[j + 1]) === 1) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort(testArray));

const insertionSort = (arr) => {
    const length = arr.length;
    let temp, j;

    for (let i = 1; i < length; i++) {
        temp = arr[i];
        j = i - 1;
        
        while (j >= 0 && arr[i] > temp) {
            array[j + 1] = array[j];
            j--;
        }

        arr[j + 1] = temp;
    }
    return arr;
}

console.log(insertionSort(testArray));