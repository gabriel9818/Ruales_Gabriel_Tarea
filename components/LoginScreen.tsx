import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Logo } from './Logo';
import { InputField } from './InputField';
import { Button } from './Button';

interface LoginScreenProps {
  onLogin: () => void;
  onRegister?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      onLogin();
    } else {
      Alert.alert('Error', 'Por favor completa todos los campos');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
        <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
        
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 pt-8">
            {/* Logo */}
            <Logo />
            
            <Text className="text-2xl font-bold text-gray-800 text-center mb-2">
              Sistema de Alerta y Reporte
            </Text>
            <Text className="text-gray-600 text-center mb-8">
              Accede para reportar y monitorear zonas de vulnerabilidad de forma segura.
            </Text>

            <InputField
              label="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              placeholder="correo@ejemplo.com"
            />

            <InputField
              label="Contraseña"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              showPasswordToggle={true}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            <Button onPress={handleLogin} text="Iniciar sesión" />

            <TouchableOpacity className="mt-4">
              <Text className="text-center text-gray-600">
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-4 mb-8">
              <Text className="text-gray-600">¿No tienes cuenta? </Text>
              <TouchableOpacity onPress={onRegister}>
                <Text className="text-blue-600 font-bold">Regístrarse</Text>
              </TouchableOpacity>
            </View>

            <Text className="text-center text-gray-500 text-sm mb-8">
              Sistema seguro y protegido
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};