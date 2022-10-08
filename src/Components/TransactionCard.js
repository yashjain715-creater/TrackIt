import React from 'react';
import {
	Text,
	View
} from 'react-native';

import styles from '../styles';
import { CurrencyComponent } from './UtilityComponents';

export default TransactionCard = ({card}) => {
  return (
    <View style={styles.transactionsCard}>
      <Text style={[styles.fontOne, card['type'] == 'Income' && {fontWeight: 'bold'}]}>{card['description']}</Text>
      <CurrencyComponent value={card['amount']} type={card['type']} fontSize={16} />
    </View>
  )
}