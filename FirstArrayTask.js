
function mapNumberGreaterThanSeventy(array){
    return array.filter(num => num >= 70)
}


function mapNumberAndAddFiveToEachNumber(array){
    return array.filter(num => num >= 0).map(num => num + 5)
}

function mapNumberAndSquareThenumbers(array){
    return array.filter(num => num >= 0).map(num => num * num)

}



module.exports = {mapNumberGreaterThanSeventy, mapNumberAndAddFiveToEachNumber,mapNumberAndSquareThenumbers}
