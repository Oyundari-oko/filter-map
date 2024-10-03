const Page = ()=>{
    const names = ["John", "Rebecca", "Sam", "Alexander", "Kate"];

    const namesLength = names.filter((nLength)=>{
     return nLength.length > 5
    })

    return(
        <div>
            <div>
               {namesLength.map((name, index)=>{
                return(<div key={index}>{name}</div>)
               })}
            </div>
        </div>
    )
}
export default Page