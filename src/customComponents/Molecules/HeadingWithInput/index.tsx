import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import LabelWithIcon from '../../Atoms/LabelWithIcon';
import styles from './style';

interface Props extends TextInputProps {
  label: string;
  icon: string;
}

const HeadingWithInput: React.FC<Props> = ({ label, icon, ...props }) => (
  <View style={{ marginTop: 14 }}>
    <LabelWithIcon icon={icon} label={label} style={{ marginBottom: 6 }} />
    <TextInput style={styles.input} {...props} />
  </View>
);

export default HeadingWithInput;
