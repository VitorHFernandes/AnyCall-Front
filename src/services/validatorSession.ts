import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ValidatorSession = () => {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return null;
}

export default ValidatorSession;