import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../../context/auth';
import styles from './styles';

const Login: React.FC = () => {
  const {signIn} = useAuth();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signIn}>
        <Text>Click para Logar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
