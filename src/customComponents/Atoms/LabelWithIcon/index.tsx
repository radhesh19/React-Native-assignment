import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

interface Props {
  icon: string;
  label: string;
  style?: any;
  color?: string;
}

const LabelWithIcon: React.FC<Props> = ({ icon, label, style, color = 'tomato' }) => (
  <View style={[styles.mainView, style]}>
    <Ionicons name={icon} size={16} color={color} style={{ marginRight: 2 }} />
    <Text style={styles.fieldLabel}>{label}</Text>
  </View>
);

export default LabelWithIcon;
