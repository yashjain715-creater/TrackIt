import React, {useState, useRef} from 'react';
import {
  View,
	TextInput,
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import COLOR from '../Color';
import styles from '../styles';

export const TextInputComponent = (props) => {
  const [onFocus, SetOnFocus] = useState(false);

  return (
    <TextInput 
      style={[styles.textInput, onFocus && {borderColor: COLOR.YELLOW}]}
      onFocus={() => SetOnFocus(true)}
      onBlur={() => SetOnFocus(false)}
      onChange={(event) => props.handleFormValueChange(props.formKey, event.nativeEvent.text)}
      {...props.textInputProps}
    />
  )
};

export const DateInputComponent = (props) => {
  const [isDatePickerVisible, SetDatePickerVisibility] = useState(false);
  const [dateValue, SetdateValue] = useState('');
  const focus = useRef(false);
  return (
    <View>
      <TextInput 
        ref={focus}
        style={styles.textInput}
        value={dateValue}
        onFocus={() => SetDatePickerVisibility(true)}
        {...props.textInputProps}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date) => {
          props.handleFormValueChange(props.formKey, date)
          focus.current.blur()
          SetDatePickerVisibility(false)
          SetdateValue(date.toString().substring(0, 15))
        }}
        onCancel={() => {
          SetDatePickerVisibility(false)
          focus.current.blur()
        }}
        maximumDate={new Date()}
      />
    </View>
  )
}