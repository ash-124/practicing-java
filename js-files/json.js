const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
const stringify = JSON.stringify(shop);
console.log(shop);
console.log("After using Stringfy json" , stringify);
const preVersion = JSON.parse(stringify);
console.log("After using parse " , preVersion);