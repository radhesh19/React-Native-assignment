import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

interface Props {
  icon: string;
  label: string;
  onPress: () => void;
}

const ButtonWithIcon: React.FC<Props> = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
    <View style={styles.mainView}>
      <Ionicons name={icon} size={16} color="#fff" style={{ marginRight: 2 }} />
      <Text style={styles.primaryButtonText}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default ButtonWithIcon;
