console.log("1번")

let i = 0;
let arr = [1, 2, 3,4,5];

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}


console.log("2번")

let j = 0;
while (j < 10) {
    j++;
    if (j % 2 === 0) {
        //짝수출력
        console.log(j)
        continue;
    }

}