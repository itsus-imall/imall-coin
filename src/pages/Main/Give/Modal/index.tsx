import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import * as S from './styled';
import { IMessage } from '../..';
import axios from 'axios';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  message: IMessage | null;
}

export default function GiveCoinModal({ setModalShow, message }: IProps) {
  const [orders, setOrders] = useState<any>([]);
  console.log(orders);
  useEffect(() => {
    const getCoin = async () => {
      const result = await axios.post(
        'https://itsus.co.kr:5555/api/imall/giveCoinTest',
        message,
      );
      setOrders(result.data);
    };
    if (message!.userId) {
      getCoin();
    }
  }, [message]);
  return (
    <S.Wrapper>
      <S.CheckButton onClick={() => setModalShow(false)}>닫기</S.CheckButton>
    </S.Wrapper>
  );
}
