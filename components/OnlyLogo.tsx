import React from 'react';
import { Image } from 'react-native';

interface OnlyLogoProps {
  size?: number;
}

export const OnlyLogo: React.FC<OnlyLogoProps> = ({ size = 64 }) => (
  <Image 
    source={require('../assets/onlylogo.png')} 
    style={{ width: size, height: size }}
    resizeMode="contain"
  />
);