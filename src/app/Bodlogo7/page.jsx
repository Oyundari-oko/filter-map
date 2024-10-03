const Page = ()=>{
    const users = [
        { id: 1, username: "john123", email: "john@gmail.com" },
        { id: 2, username: "alex456", email: "alex@yahoo.com" },
        { id: 3, username: "kate789", email: "kate@gmail.com" }
      ];
      const usersGmail = users.filter((gmail)=>{
       return gmail.email == ""
      })
      return(
        <div>
{usersGmail.map((mail, index)=>{
return(
    <div key={index}>{mail.email}</div>
)
})}
        </div>
      )
}
export default Page