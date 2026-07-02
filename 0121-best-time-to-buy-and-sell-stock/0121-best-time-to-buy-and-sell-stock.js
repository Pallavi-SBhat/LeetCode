/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=0,buying=prices[0];
    for(let i=1;i<prices.length;i++){
        buying=Math.min(buying,prices[i]);
        maxProfit=Math.max(maxProfit,prices[i]-buying);    
   }
   return maxProfit;
};