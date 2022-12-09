/* 
1.Pass the array to the function
2.Inside the function,sort the array 
3.Return the sorted array
 */
const array = [0, 2, 1, 2, 0, 1];
function toSortArray(array) {
    array.sort(function(a, b)
    {
        return a-b
    });
    return array;
}
console.log(toSortArray(array));