var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 100);
});

promiseAll([p1, p2, p3]).then(values => {
    console.log(values);
});


function promiseAll(arrayOfPromises) {
    if(arrayOfPromises.length == 0) {
        return Promise.resolve([]);
    }

    return new Promise((resolve, reject) => {
        let returnValue = [];
        let completed = 0;
        
        arrayOfPromises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(result => {
                    returnValue[index] = result;
                    completed++;
                    
                    if (completed === arrayOfPromises.length) {
                        resolve(returnValue);
                    }
                })
                .catch(err => reject(err));
        });
    });
}