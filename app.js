//with using let (Type1)
function x() {
    for (let i=1;i<=10;++i){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}

x();

//with using var (Type2)

 function x() {
     for (var i=1;i<=10;++i){
         function close(i){
             setTimeout(function(){
                 console.log(i);
             },i*1000);
         }
         close(i);
     }
 }

 x();

//for respective seconds time interval after each print(Type3)
function x() {
    var d=0;
    for (let i=1;i<=10;i++){
        d=d+i;
        setTimeout(function(){
            console.log(i);
        },(d+i)*1000);
    }
}

x();

//for respective seconds time interval after each print including time(Type4)
const printNumbersForEvery2Sec = (n) => {
  var d =0;
    for (let i = 1; i <= n; i++) {
        d=d+i-1; //or d=d+i;
      setTimeout(() => {
        console.log(i,new Date());
      }, (d+i)* 1000)
    }
  }
  printNumbersForEvery2Sec(10);
