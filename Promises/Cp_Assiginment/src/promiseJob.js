function job(delay, value) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value)
        },delay);
    });
}

 var results = [];

 var promise1 =job(1000,10);
 var promise2 =job(3000,20);
 var promise3 =job(500,30);
 var promise4 =job(1500,40);

 var promises =[promise1,promise2,promise3,promise4];

 Promise.all(promises)
 .then(function(response){
    results = response;
    console.log("Results :", results);
 })
 .catch(function(error){
    console.log("Error:", error);
 })
export { job, results };
