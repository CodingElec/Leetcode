/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
    let answer :string[] = new Array(); 
    for (let i=1; i<=n;i++) {
        if(i%3 ==0 && i%5 == 0){
            answer.push ("FizzBuzz");
        } else if (i%3 ==0) {
            answer.push ("Fizz");
        } else if (i%5==0) {
            answer.push("Buzz");
        } else {
            answer.push(i.toString());
        }
    }
    
    return answer;
    
   
};
// @lc code=end

