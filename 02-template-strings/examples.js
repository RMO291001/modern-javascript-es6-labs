// {
//     let user = "Ribbie Mohammad Omar";
//     console.log("Hello " + user + ". This is JavaScript");
//     // old method of concatanation
//     console.log(`Hello ${user}. This is JavaScript`);
//     // This is simple and do not complexify the code
// }
//Usecase -2
{
    let FirstName = "Ribbie";
    let LastName = "Mohammad Omar";

    function Fullname(fname,lname){
        return `${fname} ${lname}`;
    }
    let user = Fullname(FirstName, LastName);
    console.log(user);
}
