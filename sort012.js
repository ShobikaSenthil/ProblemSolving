/* 
1.Pass the array to the function
2.Inside the function,sort the array
3.In the for loop,iterate the loop from i=0 to array.length
4.Iterate the another loop from j = i+1 to array.length
5.If the array[i] > array[j],then swap the elements
6..Return the sorted array
 */
const array = [0, 2, 1, 2, 0, 1];
function toSortArray(array) {
    let temp ;
    for(let i = 0;i<array.length;i++)
    {
        for(let j = i+1;j<array.length;j++)
        {
            if(array[i] > array[j])
            {
                temp = array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}
console.log(toSortArray(array));