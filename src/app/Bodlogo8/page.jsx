const Page = ()=>{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const evenNumbersQuadrat = numbers.filter((even)=>{
return even.numbers > 3
    })
    return(
        <div>
        {evenNumbersQuadrat.map((evenNum, index)=>{
return(
    <div key={index}>{evenNum}</div>
)
        })}
        </div>
    )
}
export default Page