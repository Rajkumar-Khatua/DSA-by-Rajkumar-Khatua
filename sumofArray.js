const sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
// Time Complexity is O(n)
// Space Complexity is O(1)

sumArray.forEach((item) => {
    sum += item;
});
// console.log(sum);
// Time Complexity is O(n)
// Space Complexity is O(1)
console.log(sumArray.reduce((acc,curInd)=>acc+curInd))