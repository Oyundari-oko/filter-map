const Page = () =>{
    const cars = [
        { brand: "Toyota", model: "Corolla", price: 20000 },
        { brand: "Tesla", model: "Model S", price: 80000 },
        { brand: "Honda", model: "Civic", price: 25000 },
        { brand: "BMW", model: "X5", price: 60000 }
      ];
      const car = cars.filter((unetei)=>{
       return unetei.price > 30000
      })
      return(
        <div>
            {car.map(()=>{
                
            })}
        </div>
      )
}