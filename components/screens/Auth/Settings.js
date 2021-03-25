import React from 'react';
import { Text, View } from 'react-native';
import t from '../../../translation';

export default function Settings() {
  return (
    <View>
      <Text>{t('screen.settings')}</Text>
    </View>
  );
}
