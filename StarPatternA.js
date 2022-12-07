/* Algorithm
1.Pass the n number and check the input type
2.If it is not valid,it will print "Invalid input"
3.Else ,Iterate a for loop from i= 1 to n numbers
4.Inside the loop 
    3.1.create a blank string
    3.2.Create another loop from j = n to greater than or equal to i
    3.3.After the inner loop,print the string 
  */

const n = 5;
function printStar(n) {
    if (typeof n !== "number") {
        console.log("Invalid Input");
    }
    else {
        for (let i = 1; i <= 5; i++) {
            let str = "";
            for (let j = n; j >= i; j--) {
                str += "*";
            }
            console.log(str);
        }
    }
}
printStar(n);


