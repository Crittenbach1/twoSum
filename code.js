nums = [2, 7, 11, 15];

target = 9;

var twoSum = function(nums, target) {
    let length = nums.length;
    let solutions = [];
    nums.forEach(function callback(num, index, array) {
       var i = 0;
       while (i < length) {

            if (nums[index] + nums[i] === target && index != i) {
             solutions.push([index, i]);
            }

            i++;
       }
    });
    return solutions[0];
};
