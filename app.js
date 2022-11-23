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
