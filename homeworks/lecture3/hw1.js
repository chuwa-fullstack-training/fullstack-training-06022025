/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const coins = [1, 5, 25, 50];
    const target = 100;
    const coinNeed = 48;
    const solutions = [];
    
    // i is no. of 1c, j is no. of 5c, m is no. of 25c, n is no. of 50
    for (let i = 0; i <= coinNeed; i++) {
        for (let j = 0; j <= coinNeed-i; j++) {
            for (let m = 0; m <= coinNeed-i-j; m++) {
                let n = coinNeed-i-j-m;
                let total = i*1 + j*5 + m*25 + n*50;
                if (total === target) {
                    solutions.push([i, j, m, n]);
                }
                if (solutions.length === 2) {
                    break;
            }
        }
    }
}
return solutions;
};

// console.log(pickCoins());

function pickCoin() {
    // implement here
    const coins = [1,1,1,1,1,5,5,5,25,25,25,50,50];
    const target = 100;
    const res = [];

    function backtrack(start, remain, path){
        // console.log(remain);
        if (remain === 0) {
            res.push(path);
            return;
        }
        if (remain< 0) return;

        let prev = null;
        for (let i = start; i< coins.length; i++){
            const coinValue = coins[i];
            if (coinValue === prev) continue;
            if (coinValue>remain) break;
           

            path.push(coinValue);
            console.log(path);
            backtrack(i, remain-coinValue, path);
            path.pop();

            prev = coinValue;
        }
    }
    backtrack(0, target, []);
    return res;
};
console.log(pickCoin());