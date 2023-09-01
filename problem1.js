// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:

"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"


function problem1(inventory){

    const carDetail=inventory.filter((detail)=>{
        return detail.id===33;
    })
    
    console.log(`Car 33 is a ${carDetail[0].car_year} ${carDetail[0].car_make} ${carDetail[0].car_model}`);
}

module.exports=problem1