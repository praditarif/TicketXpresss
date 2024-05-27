import { decodeJwt } from 'jose';
import { useEffect, useState } from 'react';

export default function useLoggedProfile() {
  const [user, setUser] = useState({ id: '?', nama: 'Unknown', email: '?', role: '?' });

  useEffect(() => {
    const token = localStorage.getItem('request_token');
    
    if (token) {
      setUser(decodeJwt(token));
    }
  }, []);

  return user;
}
