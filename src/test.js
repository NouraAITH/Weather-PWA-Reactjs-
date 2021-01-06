function divise(var A){
    
 var Sum=0;
 var sum1=0;
 var sum2=0;
 var sum3=0;
 var cmpt=0;

  for(i=0; i<A.legth; i++)
  {
     Sum+=A[i];
  }
 
  const sumGroup=Sum/3;

  for(i=0; i<A.length;i++){
  sum1+=A[i];
   if(sum1==sumGroup){
     cmpt++;
     sum1=0;
   }
    
  }

  if(cmpt==3){
    return true;
  }

  return false;

}