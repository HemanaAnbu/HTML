const person={
    firstname:"asaithambi",
    lastname:"jsas",
};
const jsonText = 
    [
    {
    "id":"001",
    "name":"naveen",
    "salary": 5460655,
    "gender": "male" ,

},
{
    "id":"001",
    "name":"naveen",
    "salary": 5460655,
    "gender": "male" ,

}
]

// const jsonString = JSON.stringify(person);
// console.log(jsonString);
// document.write(jsonString);
const jsObject = JSON.parse(jsonText);