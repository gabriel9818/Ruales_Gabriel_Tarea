import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  showPasswordToggle = false,
  onTogglePassword
}) => (
  <View className="mb-4">
    <Text className="text-gray-700 mb-2 font-medium">{label}</Text>
    <View className="relative">
      <TextInput
        className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#9CA3AF"
      />
      {showPasswordToggle && (
        <TouchableOpacity 
          className="absolute right-4 top-3"
          onPress={onTogglePassword}
        >
          <Text className="text-gray-500 text-xl">👁</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);
