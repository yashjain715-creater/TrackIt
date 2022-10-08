import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLOR from '../Color';
import styles from '../styles';

export const CurrencyComponent = ({ value, type, fontSize = 24 }) => {
  return (
    <View style={styles.rowStyle}>
      <Icon name='usd' size={fontSize} style={[styles.alignSelfStyle, { color: type == 'Income' ? COLOR.GREEN : COLOR.RED }]} />
      <Text style={{ fontSize: fontSize, color: type == 'Income' ? COLOR.GREEN : COLOR.RED }}>{value}</Text>
    </View>
  )
}

export const CurrencyValueComponent = ({ style, title, value, type }) => {
  return (
    <View style={style}>
      {
        title == 'Expenses' &&
        <CurrencyComponent value={value} type={type} />
      }
      <Text style={styles.fontZero}>{title}</Text>
      {
        title != 'Expenses' &&
        <CurrencyComponent value={value} type={type} />
      }
    </View>
  );
}

export const ModalHeading = ({ title, handleChange }) => {
  return (
    <View style={styles.modalHeading}>
      <View style={styles.iconWidth}></View>
      <View style={styles.textWidth}>
        <Text style={styles.fontTwo}>{title}</Text>
      </View>
      <View style={styles.iconWidth}>
        <Icon
          name='close'
          size={20}
          style={[styles.alignSelfStyle]}
          onPress={() => handleChange()}
        />
      </View>
    </View>
  )
}