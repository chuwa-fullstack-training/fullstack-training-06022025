/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const maxCoins = 48;
    const targetAmount = 100; // 1 dollar in cents
    const results = []; //2 solu
    for(let c1 = 0; c1 <= maxCoins; c1++) {
        for(let c5 = 0; c5 <= maxCoins - c1; c5++) {
            for(let c25 = 0; c25 <= maxCoins - c1 - c5; c25++) {
              let c50 = maxCoins - c1 - c5 - c25; //c50 == remain coins
              const total = (c1 * 1) + (c5 * 5) + (c25 * 25) + (c50 * 50);
                        if(total === targetAmount) {
                            results.push({c1, c5, c25, c50});
                            if(results.length === 2) {
                                 console.log("Solution 1:", results[0]);
                                 console.log("Solution 2:", results[1]);
                                 return;
                            }
                                
                        }
                    }
                }
            }
        }
    

