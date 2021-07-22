import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../../context/auth';
import styles from './styles';

const Home: React.FC = () => {
  const {signOut} = useAuth();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signOut}>
        <Text>Click para Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
