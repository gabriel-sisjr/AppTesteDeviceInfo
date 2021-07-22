import React, {createContext, useContext, useState, useEffect} from 'react';

// Interfaces
import AuthContextData from '../interfaces/AuthContextData';
import Usuario from '../interfaces/Usuario';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    async function loadStorage() {
      const usr = await AsyncStorage.getItem('user'); // usuario guardado em sessão/storage whatever

      if (usr) {
        setSigned(true);
      }
    }

    loadStorage();
  }, [usuario]);

  const signIn = async () => {
    // Logica para logar.
    try {
      const usr = {id: 1, nome: 'Gabriel'};
      await AsyncStorage.setItem('user', JSON.stringify(usr));
      setUsuario(usr);
      console.log('loguei');
    } catch (e) {
      console.log('Deu erro pra salvar');
    }
  };

  async function signOut() {
    // Limpar as chaves do storage
    await AsyncStorage.clear();
    setUsuario({} as Usuario);
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{signed, usuario, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('O Hook useAuth deve ser usado com um provider!');
  }

  return context;
}

export {AuthProvider, useAuth};
