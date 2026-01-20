import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  onPress, 
  text, 
  variant = 'primary' 
}) => {
  const bgColor = variant === 'primary' ? 'bg-blue-600' : 'bg-gray-200';
  const textColor = variant === 'primary' ? 'text-white' : 'text-gray-800';
  
  return (
    <TouchableOpacity 
      className={`${bgColor} rounded-lg py-4 items-center`}
      onPress={onPress}
    >
      <Text className={`${textColor} font-bold text-base`}>{text}</Text>
    </TouchableOpacity>
  );
};