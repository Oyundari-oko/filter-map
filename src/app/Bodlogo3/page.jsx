const Page = () =>{
    const students = [
        { name: "Sarah", age: 18 },
        { name: "Mike", age: 21 },
        { name: "Jake", age: 20 },
        { name: "Emma", age: 19 }
      ];
      let dundaj = 0;
      const HumansAges = students.map((ages)=>{
        return dundaj = dundaj + ages.age 
      })
       return(
        <div>
            <div>
                {dundaj/students.length}
            </div>
        </div>
       )
}
export default Page