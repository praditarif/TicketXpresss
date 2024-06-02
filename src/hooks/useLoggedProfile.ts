import { decodeJwt } from 'jose';
import { useEffect, useRef, useState } from 'react';

interface State {
  id: string,
  nama: string,
  email: string,
  role: 'user' | 'admin',
}

export default function useLoggedProfile() {
  const [user, setUser] = useState<State | false>(false);
  const once = useRef(true);

  useEffect(() => {
    const token = localStorage.getItem('request_token');

    if (token && once.current) {
      setUser(decodeJwt(token));
      once.current = false;
    }
  }, [user]);

  return { user, setUser };
}
