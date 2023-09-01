// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function problem6(inventory) {

    let result=inventory.filter((carDetail)=>{
        return (carDetail.car_make==="Audi" || carDetail.car_make==="BMW");
    });

    return result

}

module.exports = problem6