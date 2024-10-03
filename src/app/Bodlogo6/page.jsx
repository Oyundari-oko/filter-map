const Page = ()=>{
    const cart = [
        { name: "Apple", quantity: 5, price: 2 },
        { name: "Banana", quantity: 1, price: 1 },
        { name: "Orange", quantity: 3, price: 3 },
        { name: "Grapes", quantity: 1, price: 4 }
      ];
let sum = 0
const twoOrMoreQuantityProducts = cart.filter((fruitQuantity)=>{
return fruitQuantity.quantity >= 2
})
twoOrMoreQuantityProducts.map((product) => {
    return sum += product.quantity * product.price
})
      return(
        <div>
            {sum}
        </div>
      )
}
export default Page