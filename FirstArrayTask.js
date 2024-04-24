
function mapNumberGreaterThanSeventy(array){
    return array.filter(num => num >= 70)
}


function mapNumberAndAddFiveToEachNumber(array){
    return array.filter(num => num >= 0).map(num => num + 5)
}

function mapNumberAndSquareThenumbers(array){
    return array.filter(num => num >= 0).map(num => num * num)

}

function mapTimeAndClass(array){
    return array.filter(time => {
        for(let value in time){
            if (time.endsWith("PM")){
                return value;
            }
            
        }
    })
}

function mapHealthyAndUnHealthyFruit(array) {
    let healthyFood = array.filter(food=> food.isHealthy === true)
    for(const name of healthyFood){
        console.log(healthyFood.name)
    }
    return healthyFood;
}

module.exports = {mapHealthyAndUnHealthyFruit,mapTimeAndClass,mapNumberGreaterThanSeventy, mapNumberAndAddFiveToEachNumber,mapNumberAndSquareThenumbers}
