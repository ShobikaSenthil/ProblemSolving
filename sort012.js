/* 
1.Pass the array to the function
2.Inside the function,sort the array
3.In the for loop,iterate the loop from i=0 to array.length-1
5.If the array[i] > array[i_+1],then swap the elements and assign i = -1
6..Return the sorted array
 */
const array = [0, 2, 1, 2, 0, 1];
function toSortArray(array) {
    let temp;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            i = -1;
        }
    }
    return array;
}
console.log(toSortArray(array));

