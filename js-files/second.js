function letNotify( email){
    if (email.includes("@")) {
        let separate = email.split('@');
        let user = separate[0];
        let domain = separate[1];
        return `${user} sends you an email using ${domain}`;
    }
    else{
        return "Invalid info"
    }
}
let info = "as12gmail.come"
console.log(letNotify("info"));
