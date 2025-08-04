/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var divideLand = area / 2;
console.log(divideLand);




/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 45000){
    console.log("Laptop")
}
else if( money >= 10000){
    console.log("Cycle");
}
else if(money <= 9999){
    console.log("Chocolate");
}
// else{
//     console.log('Kicui PabeNa');
// }




/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if (fileName.includes('.pdf')){
    console.log('Store');
}
else if(fileName.includes(".docx")){
    console.log('Store');
}
else if (fileName.includes(`#`)){
    console.log('Store');
}
else{
    console.log('Delete');
}




/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var personalEmail = student.name + student.roll + '.' + student.department + '@ph.ac.bd';
console.log(personalEmail);








