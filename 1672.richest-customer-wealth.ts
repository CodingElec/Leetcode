/*
 * @lc app=leetcode id=1672 lang=typescript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
function maximumWealth(accounts: number[][]): number {
    let wealthsum:number = 0;
    let highestwealth: number=0;

    for(let i=0; i<accounts.length;i++){
        // for (let j=0; i<accounts[i].length;j++){
        //     wealthsum = wealthsum + accounts[i][j];
        // }
       wealthsum = accounts[i].reduce((a, b) => a + b, 0);
        highestwealth = Math.max(wealthsum,highestwealth);
    }
return highestwealth;

};
// @lc code=end

