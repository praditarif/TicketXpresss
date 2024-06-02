import { createContext } from 'react';

interface State {
  id: string,
  nama: string,
  email: string,
  role: 'user' | 'admin',
}

export const Auth = createContext<State | false>(false);