new Promise((resolve,reject)=>{
    if(false){
    setTimeout(()=>{
        console.log("Hello, World!");
    }, 1000);
    resolve("Done!");
    }
    else{
    reject("Error: Condition is false.");
    }

}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
