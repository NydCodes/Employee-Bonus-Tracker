

var countCuticlePens = 100
var priceCuticlePens = 7
var expenses = .3 * priceCuticlePens
var soldCuticlePens = 49
var grossRevenue = soldCuticlePens * priceCuticlePens
var profits = priceCuticlePens - expenses
var employeeCount = 3
var bonusCalculator = (profits / 2) / employeeCount

console.log("We earned $", grossRevenue, "in sales this season.", "We sold", soldCuticlePens, "cuticle oil pens!")

if (profits > expenses) {
    console.log("We were profitable! Each employee gets $", bonusCalculator, "in bonus payments! ")
} else {
    console.log("We did not make a profit! We have to try harder next time!")

}

