const Page = ()=>{

    const employees = [
    { name: "John", salary: 60000 },
    { name: "Jane", salary: 45000 },
    { name: "Alex", salary: 75000 },
    { name: "Linda", salary: 30000 }
  ];
  const peopleSalary = employees.filter((salaries)=>{
   return salaries.salary > 50000
  })

    return(
        <div>
            <div>
           {peopleSalary.map((item, index)=>{
              return (<div key={index}>{item.name} {item.salary}</div>)
           })}
            </div>
        </div>
    )
}
export default Page
