import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import AntIcon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';

import COLOR from './Color';
import styles from './styles';
import { CurrencyValueComponent } from './Components/UtilityComponents';
import AddIncomeExpenseComponent from './Components/AddIncomeExpenseComponent';
import DetailsIncomeExpenseComponent from './Components/DetailsIncomeExpenseComponent';
import { getTransactionList } from './utility/utility';
import TransactionCard from './Components/TransactionCard';

const HomeScreen = () => {
  const [modalVisible, SetModalVisible] = useState(false);
  const [transaction, SetTransaction] = useState('');
  const [transactions, SetTransactions] = useState(null);
  const [addIncomeExpenseModal, SetAddIncomeExpenseModal] = useState(null);
  const [incomes, SetIncomes] = useState(0);
  const [expenses, SetExpenses] = useState(0);

  useEffect(() => {
    async function getTransaction() {
      try {
        const items = await AsyncStorage.getItem('Transaction')
        if (items !== null) {
          let transactions = await getTransactionList(items)
          SetTransactions(transactions['transactions'])
          SetIncomes(transactions['income'])
          SetExpenses(transactions['expense'])
        }
      } catch (error) {
        console.log(error)
      }
    }
    getTransaction()
  }, [modalVisible])

  handleModalClose = () => {
    SetModalVisible(false);
  }

  handleModalSwitch = () => {
    SetAddIncomeExpenseModal(true);
  }

  return (
    <SafeAreaView style={[styles.homesafearea, styles.plusButtonEnd]}>

      <>
        <View style={{ backgroundColor: COLOR.WHITE }}>
          <View style={styles.balanceIncomeExpenseStyle}>
            <CurrencyValueComponent style={styles.balanceStyle} title="Balance" value={incomes - expenses} type={incomes - expenses >= 0 ? 'Income' : 'Expense'} />
            <View style={styles.incomeExpenseStyle}>
              <CurrencyValueComponent style={styles.incomeExpenseCommonStyle} title="Income" value={incomes} type={'Income'} />
              <CurrencyValueComponent style={styles.incomeExpenseCommonStyle} title="Expenses" value={expenses} type={'Expense'} />
            </View>
          </View>
        </View>

        <FlatList
          data={transactions}
          style={styles.List}
          keyExtractor={item => item.date}
          renderItem={({ item }) => {
            let today = false, todaysDate = new Date(), currentItemDate = new Date(item['date']);
            if (currentItemDate.toString().substring(0, 15) == todaysDate.toString().substring(0, 15)) {
              today = true
            }
            return (
              <View style={styles.transactionsList}>
                <Text style={styles.fontOne}>{today ? 'Today' : currentItemDate.toString().substring(0, 15)}</Text>
                {
                  item['items'].map((card, key) => {
                    return (
                      <TouchableOpacity
                        key={key}
                        activeOpacity={0.8}
                        onPress={() => {
                          SetTransaction(card)
                          SetAddIncomeExpenseModal(false)
                          SetModalVisible(true)
                        }}
                      >
                        <TransactionCard card={card} />
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            )
          }}
        />

      </>

      <TouchableOpacity
        onPress={() => {
          SetModalVisible(true)
          SetTransaction('')
          SetAddIncomeExpenseModal(true)
        }}
        style={{ backgroundColor: COLOR.GREY }}
      >
        <View style={styles.plusButtonStyle}>
          <AntIcon name='plus' size={28} color={COLOR.WHITE} />
        </View>
      </TouchableOpacity>


      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          SetModalVisible(!modalVisible);
        }}
      >
        {
          addIncomeExpenseModal ?
            <AddIncomeExpenseComponent handleChange={handleModalClose} transaction={transaction} /> :
            <DetailsIncomeExpenseComponent transaction={transaction} handleChange={handleModalClose} handleSwitch={handleModalSwitch} />
        }
      </Modal>
    </SafeAreaView>
  )
}

export default HomeScreen;