/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  const ret = [];
  for (let i = 0; i <= 48; i++) {
    for (let j = 0; j <= 48 - i; j++) {
      for (let k = 0; k <= 48 - i - j; k++) {
        const z = 48 - i - j - k;
        const total = i * 1 + j * 5 + k * 25 + z * 50;
        if (total === 100) {
          ret.push([i, j, k, z]);
          if (ret.length === 2) {
            return ret;
          }
        }
      }
    }
  }
}

console.log(pickCoins());
