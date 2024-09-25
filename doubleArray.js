let arr = [4,5,8]
let newArr = []
let count = 0;
for(let index = 0; index < arr.length; index++){
    newArr[count] = arr[index]
   // arr.push(temp)
    // count ++;
    let temp = arr[index] * 2
    newArr.push(temp)

    console.log(newArr);
    count++
}

