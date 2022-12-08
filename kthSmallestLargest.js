/* Algorithm
1.Pass the array and k value
2.Inside the function,Check whether the k is positive or not .
3.If k is positive,Sort the array 
    3.1.Print array[k-1]
    3.2.Print array[array.length - 1]
4.Else return Invalid Input
 */

const array = [1, 3, 2, 5, 6, 7, 23, 56, 34, 0];
const k = 5;

function findKthSmallestLargest(array, k) {
    if (k > 0) {
        let result_String = "";
        array.sort(function (a, b) {
            return a - b;
        });
        result_String += "Smallest :" + array[k - 1];
        result_String += "\nLargest: " + array[array.length - k];

        return result_String;
    }
    else {
        return "Invalid Input";
    }
}

console.log(findKthSmallestLargest(array, k));