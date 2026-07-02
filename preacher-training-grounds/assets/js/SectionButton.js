import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SectionButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333'
  }
});
