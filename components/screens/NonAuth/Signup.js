import React from 'react';
import { Text, View } from 'react-native';
import t from '../../../translation';

export default function Signup() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{t('screen.signup')}</Text>
    </View>
  );
}
