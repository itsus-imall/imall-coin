import axios from 'axios';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import AdminLoginForm from './Login/AdminLoginForm';

const Admin = () => {
  const message: Record<string, string> = {
    'non-id': '존재 하지 않는 아이디입니다.',
    'minus-coin': '차감할 마음이 없습니다.',
  };

  const [login, setLogin] = useState(true);

  const coinAmountRef = useRef<HTMLInputElement>(null);
  const userIdRef = useRef<HTMLInputElement>(null);

  if (!login) {
    return <AdminLoginForm setLogin={setLogin} />;
  }

  const updateCoinHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userId = userIdRef.current!.value;
    const coinAmount = coinAmountRef.current!.value;
    if (userId === '' || coinAmount === '') return alert('빈칸을 입력하세요.');
    const { data: result } = await axios.post(
      'https://itsus.co.kr:5555/api/imall/admin/coin',
      {
        userId,
        coinAmount,
      },
    );
    console.log(message[result.status]);
  };

  const Form = styled.form`
    padding: 50px;
    box-sizing: border-box;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  return (
    <Form onSubmit={updateCoinHandler}>
      <input type='text' placeholder='고객 아이디' ref={userIdRef} />
      <input
        type='number'
        placeholder='마음 갯수 ( 차감은 -9, 증감은 9 )'
        ref={coinAmountRef}
      />
      <button>변경</button>
    </Form>
  );
};

export default Admin;
