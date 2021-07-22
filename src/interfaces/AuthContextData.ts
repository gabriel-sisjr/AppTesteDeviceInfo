import Usuario from './Usuario';

export default interface AuthContextData {
  signed: boolean;
  usuario: Usuario;
  signIn(): void;
  signOut(): void;
}
