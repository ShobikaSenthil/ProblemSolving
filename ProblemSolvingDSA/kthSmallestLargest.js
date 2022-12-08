/* Algorithm
1.Pass the array and k value
2.Sort the array 
3.Print array[k-1]
4.Print array[array.length - 1]
 */

const array = [1, 3, 2, 5, 6, 7, 23, 56, 0];
const k = 5;

function findKthSmallestLargest(array, k) {
    array.sort(function (a, b) {
        return a - b;
    });
    // console.log(array);
    console.log("Smallest : ", array[k - 1]);
    console.log("Largest : ", array[array.length - k]);
}

findKthSmallestLargest(array, k);