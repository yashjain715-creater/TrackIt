import React, { useState } from 'react';
import { formData } from '../formData/FormData';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import COLOR from '../Color';
import styles from '../styles';
import { ModalHeading } from './UtilityComponents';

import { TextInputComponent, DateInputComponent } from './InputComponents';
import { setTransaction } from '../utility/utility';

const SwitchButtonComponent = ({ title, style, switchState }) => {
  return (
    <View style={[styles.switchButtonContent, style, switchState ? { backgroundColor: COLOR.YELLOW } : { backgroundColor: COLOR.GREY }]}>
      <Text style={[styles.fontOne, switchState ? { color: COLOR.WHITE } : { color: COLOR.BLACK }]}>{title}</Text>
    </View>
  )
}


export default AddIncomeExpenseComponent = ({ handleChange, transaction }) => {
  const [switchState, SetSwitchState] = useState(transaction != '' ? transaction['type'] == 'Income' ? true : false : true);
  const [saveState, SetSaveState] = useState(false);
  const [formValues, handleFormValueChange, setFormValues] = formData({
    amount: '',
    description: '',
    date: ''
  })

  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <View style={styles.modalView}>
        <ModalHeading title={'Add Income/Expense'} handleChange={handleChange} />

        <View>
          <View style={styles.switchButton}>
            <TouchableOpacity
              onPress={() => SetSwitchState(true)}
            >
              <SwitchButtonComponent title={'Income'} style={styles.leftBorder} switchState={switchState} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => SetSwitchState(false)}
            >
              <SwitchButtonComponent title={'Expense'} style={styles.rightBorder} switchState={!switchState} />
            </TouchableOpacity>
          </View>

          <TextInputComponent
            formKey='amount'
            handleFormValueChange={handleFormValueChange}
            textInputProps={{
              keyboardType: 'numeric',
              placeholder: transaction != '' ? transaction['amount'] : 'Amount'
            }}
          />
          {formValues['amount'] == '' && saveState &&
            <View style={styles.errorMessage}>
              <Text style={{ color: COLOR.RED }}>Amount is null.</Text>
            </View>
          }

          <TextInputComponent
            formKey='description'
            handleFormValueChange={handleFormValueChange}
            textInputProps={{
              placeholder: transaction != '' ? transaction['description'] : 'Description'
            }}
          />
          {formValues['description'] == '' && saveState &&
            <View style={styles.errorMessage}>
              <Text style={{ color: COLOR.RED }}>Description is null.</Text>
            </View>
          }

          <DateInputComponent
            formKey='date'
            handleFormValueChange={handleFormValueChange}
            textInputProps={{
              placeholder: transaction != '' ? new Date(transaction['date']).toString().substring(0, 15) : 'Date'
            }}
          />
          {formValues['date'] == '' && saveState &&
            <View style={styles.errorMessage}>
              <Text style={{ color: COLOR.RED }}>Date is null.</Text>
            </View>
          }

          <TouchableOpacity
            onPress={async () => {
              const type = switchState ? "Income" : "Expense"
              formValues['type'] = type
              if (formValues['amount'] == '' || formValues['description'] == '' || formValues['date'] == '') {
                SetSaveState(true)
                return
              }
              await setTransaction(formValues, transaction)
              handleChange()
            }}
          >
            <View style={[styles.alignSelfStyle, { marginTop: 16 }]}>
              <Text style={[styles.fontTwo, { color: COLOR.YELLOW }]}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}