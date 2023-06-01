import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import * as S from './styled';
import { IMessage } from '../..';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  message: IMessage | null;
}

export default function GiveCoinModal({ setModalShow, message }: IProps) {
  const [orders, setOrders] = useState<any>([]);
  const [date, setDate] = useState<Date>(new Date());

  const formatDateToYYYYMMDD = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const getOrdersHandler = async () => {
    if (!message?.userId) return;
    const formatDate = formatDateToYYYYMMDD(date);
    const result = await axios.post(
      'https://itsus.co.kr:5555/api/imall/giveCoinTest',
      { ...message, date: formatDate },
    );
    setOrders(result.data);
  };
  useEffect(() => {
    const getCoin = async () => {};
    if (message!.userId) {
      getCoin();
    }
  }, [message]);
  return (
    <S.Wrapper>
      <S.DateWrapper>
        <div className='date_contents'>
          <S.DatePickerInput
            selected={date}
            shouldCloseOnSelect
            onChange={(date: Date) => setDate(date)}
            locale={ko}
            minDate={new Date('2023-03-01')}
            maxDate={new Date()}
            dateFormat='yyyy년 MM월 dd일  ▼'
          />
          <S.DateButton onClick={() => getOrdersHandler()}>조회</S.DateButton>
        </div>
        <span>
          선택하신 날짜 기준 3개월 주문목록을 자동조회 후 마음이 지급됩니다.
        </span>
      </S.DateWrapper>
      <S.CheckButton onClick={() => setModalShow(false)}>닫기</S.CheckButton>
    </S.Wrapper>
  );
}
