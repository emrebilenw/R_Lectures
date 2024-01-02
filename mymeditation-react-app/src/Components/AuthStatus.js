// Örnek Kullanıcı Durumu Kontrolü (AuthStatus.js)
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const AuthStatus = ({ auth }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);
{console.log(user)}
  return (
    <div>
      {user ? (
        <p>Kullanıcı Giriş Yaptı: {user.email}</p>
      ) : (
        <p>Kullanıcı Giriş Yapmadı</p>
      )}
    </div>
  );
};

export default AuthStatus;
