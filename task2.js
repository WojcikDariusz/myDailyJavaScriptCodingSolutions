/* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:
Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length. */


//Mocking test case
nums = [1,1,1,2,4,6,6,7,7,7,8];

//Function iterating through the loop and removing if next element of an array is the same as previous.
var removeDuplicates = function(nums) {
    
    for (i = 0; i < nums.length; i++) {
        
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1);
            i--;
        };
    };

    return nums;
};

//Invoiking function
removeDuplicates(nums);


