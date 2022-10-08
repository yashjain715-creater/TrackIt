import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import COLOR from '../Color';
import styles from '../styles';

import { CurrencyComponent, ModalHeading } from './UtilityComponents';
import { deleteTransaction } from '../utility/utility';


export default DetailsIncomeExpenseComponent = ({ transaction, handleChange, handleSwitch }) => {
  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <View style={styles.modalView}>
        <ModalHeading title={transaction['type']} handleChange={handleChange} />

        <View style={styles.currencyShown}>
          <CurrencyComponent value={transaction['amount']} type={transaction['type']} fontSize={32} />
        </View>
        <View style={styles.descriptionShown}>
          <Text style={[styles.fontTwo, { paddingBottom: 8 }]}>{transaction['description']}</Text>
          <Text style={styles.fontOne}>{transaction['date']}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleSwitch()}
        >
          <View style={[styles.alignSelfStyle, { marginTop: 8 }]}>
            <Text style={[styles.fontTwo, { color: COLOR.YELLOW }]}>Edit</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await deleteTransaction(transaction)
            handleChange()
          }}
        >
          <View style={[styles.alignSelfStyle, { marginTop: 8 }]}>
            <Text style={[styles.fontTwo, { color: COLOR.BLACK }]}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}