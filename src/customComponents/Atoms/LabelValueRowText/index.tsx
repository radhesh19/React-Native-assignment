import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

interface Props {
  label: string;
  value: string;
}

const LabelValueRowText: React.FC<Props> = ({ label, value }) => (
  <View style={styles.rowBetween}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

export default LabelValueRowText;
