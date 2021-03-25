import React from 'react';
import { Text, View } from 'react-native';
import t from '../../../translation';

export default function Home() {
  return (
    <View>
      <Text>{t('screen.home')}</Text>
    </View>
  );
}
