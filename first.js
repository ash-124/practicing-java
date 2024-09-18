// problem-1
function calculateTax(monthlyIncome,monthlyExpenses) {
    if (monthlyIncome < 0 || monthlyExpenses < 0 ) {
        console.log("Invalid Input")
        return
    }
    else{
    const profit = ( monthlyIncome - monthlyExpenses );
    const tax = ( profit * 0.2 );
    return tax ;
    }
}
console.log(calculateTax(50000,10000));
