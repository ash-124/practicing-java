const loader = () => {
    // returning a promise and inside promise two call back function
    return new Promise ((resolve, reject) => {
        const success = true;
        if(success){
            resolve(0.5);
        }
        else{
            reject(0.8);
        }
    })
}
loader();