/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
function runningSum(nums: number[]): number[] {

    let result: number[] = [nums[0]];
 

    for (let i=1; i < nums.length; i++){
        result[i] = result[i-1]+nums[i];
    }
return result;
};
// @lc code=end

