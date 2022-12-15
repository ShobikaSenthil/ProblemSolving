/* 
1.Pass the array and element to the function
2.Sort the array
3.Iterate the loop and check whether the element is equal to the arr[i]+1 or arr[i]-1
4.If the it is equal , it should return the arr[i] and break the loop
 */

const arr = [1,5,3,6,8];
const element = 4;
function toFindClosestElement(arr,element)
{
    arr.sort();
    for(let i = 0; i<arr.length;i++)
    {
        if( element === arr[i]-1 || element === arr[i]+1)
        {
            return arr[i];
            break;
        }
    }
}
console.log(toFindClosestElement(arr,element));



