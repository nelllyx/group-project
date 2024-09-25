let nums = [3,3]
let target = 6
let newArr = []

for(let index  = 0; index < nums.length; index++){
    if(nums[index] + nums[index + 1] === target){
        newArr.push(nums.indexOf(nums[index]))
        newArr.push(nums.indexOf(nums[index + 1]))

    }
}
console.log(newArr)