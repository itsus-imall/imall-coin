import { useState } from 'react';
import AdminLoginForm from './Login/AdminLoginForm';

const Admin = () => {
  const [login, setLogin] = useState(false);
  if (!login) {
    return <AdminLoginForm setLogin={setLogin} />;
  }
  return <form action=''>sdfs</form>;
};

export default Admin;
