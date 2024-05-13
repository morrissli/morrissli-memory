const numer = "10369";
const numer1 = Math.floor(numer / 10000) % 10;
const numer2 = Math.floor(numer / 1000) % 10;
const numer3 = Math.floor(numer / 100) % 10;
const numer4 = Math.floor(numer / 10) % 10;
const numer5 = numer % 10;
console.log(`${numer1} ${numer2} ${numer3} ${numer4} ${numer5}`);