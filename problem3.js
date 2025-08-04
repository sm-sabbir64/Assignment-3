/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here

for (var i=1; i<= lastDay; i++){
    if(i==3){
        console.log(3, '-', 'medicine');
    }
    else if(i===6){
        console.log(6, "-", "medicine");
    }
    else{
        console.log(i, "-", "rest");
    }
}

