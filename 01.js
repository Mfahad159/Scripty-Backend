let mypro = new Promise((resolve, reject) => {
    let a = 3 + 1;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});
mypro.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
}).finally(() => {
    console.log("This is in the finally");
});
