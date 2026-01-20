import React from 'react';
import { View, Image } from 'react-native';

export const Logo = () => (
  <View className="items-center mb-8">
    <View className="w-24 h-24 rounded-full overflow-hidden bg-white">
      <Image 
        source={require('../assets/onlylogo.png')} 
        className="w-full h-full"
        resizeMode="contain"
      />
    </View>
  </View>
);