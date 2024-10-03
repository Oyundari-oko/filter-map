const Page = ()=>{
    const products = [
        { name: "Laptop", category: "Electronics", price: 1000 },
        { name: "Book", category: "Stationery", price: 15 },
        { name: "Phone", category: "Electronics", price: 800 },
        { name: "Pen", category: "Stationery", price: 5 }
      ];
      const categories = products.filter((categor)=>{
       return categor.category == "Electronics"
      })
      return(
        <div>
            <div>
        {categories.map((item, index)=>{
        return(
            <div key={index}>{item.price}</div>
        )
        })}
            </div>
        </div>
      )
}
export default Page