import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface Report {
  id: number;
  type: string;
  location: string;
  status: string;
}

interface HomeScreenProps {
  onLogout: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onLogout }) => {
  const [reports] = useState<Report[]>([
    { id: 1, type: 'Zona de Riesgo', location: 'Centro Histórico', status: 'Activo' },
    { id: 2, type: 'Alerta', location: 'La Mariscal', status: 'En revisión' },
    { id: 3, type: 'Reporte Comunitario', location: 'La Carolina', status: 'Verificado' },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
        <StatusBar barStyle="light-content" backgroundColor="#2563eb" />
        
        {/* Header con logo */}
        <View className="bg-blue-600 px-6 py-4">
          <View className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center">
              {/* Logo redondo pequeño */}
              <View className="w-10 h-10 rounded-full overflow-hidden bg-white mr-2">
                <Image 
                  source={require('../assets/onlylogo.png')} 
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-white text-2xl font-bold">COMUNI-MAP</Text>
            </View>
            <TouchableOpacity 
              onPress={onLogout}
              className="bg-blue-700 px-4 py-2 rounded-lg"
            >
              <Text className="text-white text-sm font-semibold">Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-white text-base">Sistema de Monitoreo</Text>
        </View>

        <ScrollView className="flex-1 px-6 pt-6">
          <View className="bg-white rounded-xl p-6 mb-4">
            <Text className="text-xl font-bold text-gray-800 mb-4">Panel de Control</Text>
            
            <View className="flex-row justify-between mb-6">
              <TouchableOpacity className="items-center flex-1">
                <View className="w-16 h-16 bg-orange-100 rounded-full items-center justify-center mb-2">
                  <Text className="text-orange-600 text-2xl">📍</Text>
                </View>
                <Text className="text-gray-600 text-xs">Reportar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="items-center flex-1">
                <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center mb-2">
                  <Text className="text-blue-600 text-2xl">🗺️</Text>
                </View>
                <Text className="text-gray-600 text-xs">Mapa</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="items-center flex-1">
                <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-2">
                  <Text className="text-green-600 text-2xl">📊</Text>
                </View>
                <Text className="text-gray-600 text-xs">Estadísticas</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text className="text-lg font-bold text-gray-800 mb-3">Reportes Recientes</Text>
          
          {reports.map(report => (
            <View key={report.id} className="bg-white rounded-lg p-4 mb-3">
              <View className="flex-row justify-between items-center">
                <View className="flex-1">
                  <Text className="text-gray-800 font-bold mb-1">{report.type}</Text>
                  <Text className="text-gray-600 text-sm">{report.location}</Text>
                </View>
                <View className="bg-yellow-100 px-3 py-1 rounded-full">
                  <Text className="text-yellow-700 text-xs">{report.status}</Text>
                </View>
              </View>
            </View>
          ))}

          <TouchableOpacity className="bg-blue-600 rounded-lg py-4 items-center mt-4 mb-8">
            <Text className="text-white font-bold">+ Nuevo Reporte</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};