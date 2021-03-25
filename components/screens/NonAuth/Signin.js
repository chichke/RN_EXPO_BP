import React from 'react';
import { Text, View } from 'react-native';
import t from '../../../translation';

export default function Signin() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{t('screen.signin')}</Text>
    </View>
  );
}
