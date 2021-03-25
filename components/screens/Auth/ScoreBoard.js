import React from 'react';
import { Text, View } from 'react-native';
import t from '../../../translation';

export default function ScoreBoard() {
  return (
    <View>
      <Text>{t('screen.scoreboard')}</Text>
    </View>
  );
}
