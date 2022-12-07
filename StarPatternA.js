/* Algorithm
1.Pass the n number and check the input type
2.If it is not valid,it will print "Invalid input"
3.Else , create a blank string and Iterate a for loop from i= 1 to n numbers
4.Create another loop from j = n to greater than or equal to i
5.After the inner loop,concat the "\n"
6.After for loop ,return the string str.
*/

const n = 5;
function printStar(n) {
    if (typeof n !== "number") {
        return "Invalid Input";
    }
    else {
        let str = "";
        for (let i = 1; i <= 5; i++) {
            for (let j = n; j >= i; j--) {
                str += "*";
            }
            str += "\n";
        }
        return str;
    }
}
console.log(printStar(n));


