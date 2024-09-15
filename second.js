function letNotify( email){
    if (email.includes("@")) {
        let separate = email.split('@');
        let user = separate[0];
        let domain = separate[1];
        return `${user} sends you an email using ${domain}`;
    }
}
console.log(letNotify("asrafaly7@gmail.com"))