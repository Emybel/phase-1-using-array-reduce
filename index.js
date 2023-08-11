const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((aggr,current) => aggr+=current);
console.log(totalBatteries);

