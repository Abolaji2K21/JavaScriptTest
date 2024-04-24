let {mapHealthyAndUnHealthyFruit,mapTimeAndClass,mapNumberGreaterThanSeventy,mapNumberAndAddFiveToEachNumber,mapNumberAndSquareThenumbers} = require("./FirstArrayTask.js");



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

test("Filter Number and Then return Pm ", () => {
    let array = ["3:00 PM","4:00 AM ","7:00 PM"]

    let answer = mapTimeAndClass(array)
    console.log(answer)

    expect(answer).toStrictEqual([ "3:00 PM", "7:00 PM" ])
  
})


test("Filter Number and Then return Pm ", () => {
    let shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }]

     let answer = mapHealthyAndUnHealthyFruit(shoppingList)

     let isHealthy = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }

     ]

     expect(answer).toEqual(isHealthy)



})


