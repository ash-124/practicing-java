// problem-1
function calculateTax(monthlyIncome,monthlyExpenses) {
    if (monthlyIncome < 0 || monthlyExpenses < 0 ) {
        console.log("Invalid Input")
        return
    }
    const profit = ( monthlyIncome - monthlyExpenses );
    const tax = ( profit * 0.2 );
    return tax ;
}