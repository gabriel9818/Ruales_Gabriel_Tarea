import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button } from './Button';

interface WelcomeScreenProps {
  onContinue: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue }) => (
  <SafeAreaProvider>
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <View className="flex-1 justify-center items-center px-8">
        {/* Logo con círculos decorativos */}
        <View className="mb-8">
          <View className="relative w-48 h-48 items-center justify-center">
            <View className="absolute w-32 h-32 bg-blue-600 rounded-full opacity-20" />
            <View className="absolute w-24 h-24 bg-orange-500 rounded-full opacity-30" />
            {/* Logo redondo */}
            <View className="w-32 h-32 rounded-full overflow-hidden bg-white">
              <Image 
                source={require('../assets/onlylogo.png')} 
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Nombre de la app en texto */}
        <Text className="text-blue-600 font-bold text-3xl mb-2">
          COMUNI-MAP <Text className="text-orange-500">APP</Text>
        </Text>

        <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
          Aplicación de alerta y reporte
        </Text>

        <Text className="text-gray-600 text-center mb-8 leading-6">
          La trata infantil es una problemática real en Ecuador que afecta a miles de niñas, niños y adolescentes en zonas de alta vulnerabilidad.
          {'\n\n'}
          Esta plataforma permite reportar, visualizar y monitorear zonas de riesgo, apoyando la prevención y la toma de decisiones responsables.
        </Text>

        <View className="w-full">
          <Button onPress={onContinue} text="Continuar" />
        </View>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);