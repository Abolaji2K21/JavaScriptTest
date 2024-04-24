
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


module.exports = {mapTimeAndClass,mapNumberGreaterThanSeventy, mapNumberAndAddFiveToEachNumber,mapNumberAndSquareThenumbers}
