import AsyncStorage from "@react-native-async-storage/async-storage";

function checkTransaction(transaction_a, transaction_b) {
    return transaction_a.amount == transaction_b['amount'] &&
        transaction_a.description == transaction_b['description'] &&
        transaction_a.date == transaction_b['date'] &&
        transaction_a.type == transaction_b['type']
}

export async function deleteTransaction(transaction) {
    try {
        const items = await AsyncStorage.getItem('Transaction')
        if(items !== null) {
            let parsedItems = JSON.parse(items), updatedItems = [];
            parsedItems.forEach(function(obj) { 
                if(!checkTransaction(obj, transaction)) {
                    updatedItems.push(obj);
                }
            });
            try {
                await AsyncStorage.setItem('Transaction', JSON.stringify(updatedItems))
            } catch (error) {
                console.log(error)
            }
        }   
    } catch (error) {
        console.log(error)
    }
}

export async function getTransactionList(transactions) {
    let income = 0, expense = 0;
    let result = Object.values(JSON.parse(transactions).reduce((a, {amount, date, description, type}) => {
        if(type == 'Income') {
            income = income + parseInt(amount)
        } else {
            expense = expense + parseInt(amount)
        }
        let itemDate = new Date(date).toString().substring(0, 15);
        if(!a[itemDate]) {
            a[itemDate] = Object.assign({}, {items: [{amount, description, type, date}], date});
        } else {
            a[itemDate].items.unshift({amount, description, type, date});
        }
        return a;
    },{}));
    let sortedTransactions = result.sort(
        (objA, objB) => {
            let dateA = new Date(objA.date), dateB = new Date(objB.date)
            return Number(dateB) - Number(dateA)
        }
    )
    return {'transactions': sortedTransactions, 'income': income, 'expense': expense}
}

export async function setTransaction(formValues, transaction) {
    try {
        if(transaction != '') {
          await deleteTransaction(transaction)
        }
        const items = await AsyncStorage.getItem('Transaction')
        let updatedItems = items === null ? []: JSON.parse(items)
        updatedItems.push(formValues)
        try {
          await AsyncStorage.setItem('Transaction', JSON.stringify(updatedItems))
        } catch (error) {
          console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}