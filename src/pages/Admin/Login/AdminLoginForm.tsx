import axios from 'axios';
import React, { Dispatch, SetStateAction, useRef } from 'react';

interface IProps {
  setLogin: Dispatch<SetStateAction<boolean>>;
}

const AdminLoginForm = ({ setLogin }: IProps) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const password = passwordRef.current!.value;
    const { data: loginStatus } = await axios.post(
      'https://itsus.co.kr:5555/api/imall/admin/login',
      {
        password,
      },
    );
    loginStatus ? setLogin(loginStatus) : alert('비밀번호가 틀렸습니다.');
  };

  return (
    <form onSubmit={loginHandler}>
      <input type='password' ref={passwordRef} />
      <button>로그인</button>
    </form>
  );
};

export default AdminLoginForm;
