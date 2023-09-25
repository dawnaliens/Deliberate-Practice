'use strict'
var test = new Array();
console.log(test)
console.log(test.length)

var search = function(nums, target){
    let left = 0;
    let right = nums.length;
    while (left <= right){
        var middle = Math.floor(left + (right - left) / 2)
        if (nums[middle] < target){
            left += 1
        }else if (nums[middle] > target){
            right -= 1
        }else{
            return middle
        }
    }
    return -1
}

var nums1 = [-1,0,3,5,9,12];
var target1 = 9;
var target2 = 2;

console.log(search(nums1, target1));
console.log(search(nums1, target2));