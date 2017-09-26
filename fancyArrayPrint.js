var stringArr=["James", "Jill", "Jane", "Jack"];

function fancyPrint(arrToPrint,char){
   if (char===undefined){
       char = "->";
   }
   for(var i=0; i<arrToPrint.length; i++){
       console.log(i+" "+char+" "+arrToPrint[i]);
   }

}

//fancyPrint(stringArr)
fancyPrint(stringArr, "##");
