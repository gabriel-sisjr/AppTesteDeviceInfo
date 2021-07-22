import 'react-native-gesture-handler';
import React from 'react';
import {AuthProvider} from './context/auth';
import Routes from './routes';

// validations
import {useIsEmulator} from 'react-native-device-info';
import JailMonkey from 'jail-monkey';
import {StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
  const {result} = useIsEmulator();
  const isAppTrusted = !JailMonkey.trustFall();

  return isAppTrusted && !result ? (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  ) : (
    <View style={style.container}>
      <Text style={style.message}>
        Emulador ou Celular com Root Ativo. (Substituir mensagem por componente)
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  message: {fontWeight: 'bold', fontSize: 15, padding: 15},
});

export default App;
