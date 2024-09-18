function checkDigitsOnName(name) {
    for (let i = 0; i < name.length; i++) {
        
        if (!isNaN(name[i])) {
            return true;
        }
        else{
            return false;
        }
    }
   
}
let info = "asraf12";
console.log(checkDigitsOnName(info))