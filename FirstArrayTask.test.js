let {mapNumberGreaterThanSeventy,mapNumberAndAddFiveToEachNumber,mapNumberAndSquareThenumbers} = require("./FirstArrayTask.js");



test("Filter Grades Greater Than 70 ", () => {
    let array = [71,30,45,57,62,71,99,9,20,10]

    let answer = mapNumberGreaterThanSeventy(array)

    expect(answer).toStrictEqual([ 71, 71, 99 ])
  
})

test("Filter Grades and Then add Five To each ", () => {
    let array = [71,30,45,52]

    let answer = mapNumberAndAddFiveToEachNumber(array)
    console.log(answer)

    expect(answer).toStrictEqual([ 76, 35, 50, 57 ])
  
})

test("Filter Number and Then multiply by num ", () => {
    let array = [2,4,6,8,10]

    let answer = mapNumberAndSquareThenumbers(array)
    console.log(answer)

    expect(answer).toStrictEqual([ 4, 16, 36, 64, 100 ])
  
})

