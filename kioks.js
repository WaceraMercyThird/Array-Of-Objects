// Array of objects

var kiosk = [
    {
        fruitName:"Orange",
        price: 30.00
    },
    {
        fruitName:"Mango",
        price: 50.00
    },
    {
        fruitName:"Apple",
        price: 70.00
    },
    {
        fruitName:"Pineapple",
        price: 20.00
    }
]
function calculateFruitCost(fruitName,quantity){
    let j=kiosk.find(item=>item.fruitName===fruitName)
    console.log(`${quantity} ${fruitName} for KES ${j.price*quantity}.00`)
}
calculateFruitCost("Orange", 2)



class KioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
        this.getTotalCost = function(){
            return`${quantity} ${fruit} for KES ${quantity * this.fruitsPriceList.orange}`
        }
    }
}
var shop = new KioskCalc('Orange', 2);
console.log(shop.getTotalCost());