const Page = ()=>{
    const people = [
        { name: "Alice", age: 17 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 19 },
        { name: "David", age: 16 }
      ];

      const humansAges = people.filter((ages)=>{
       return ages.age > 18
      })
      const human = humansAges.map((names)=>{
return  names.name.toUpperCase()
      })
      return(
        <div>
            <div>
   {human.map((humansNames, index)=>{
return(
    <div key={index}>{humansNames}</div>
)
   })}
            </div>
        </div>
      )
    //   output: ["BOB", "CHARLIE"]
}
export default Page