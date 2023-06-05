import { Dispatch, SetStateAction, useState } from 'react';

import * as S from './styled';

import { IMessage } from '../..';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import {
  formatDateToYYYYMMDD,
  formatThreeMonthsDay,
} from '../../../../service/formatDate';
import Loading from '../../../../components/Loading';

const status: Record<string, string> = {
  'zero-coin': '해당 기간에는 받을 수 있는 마음이 없습니다.',
};

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  message: IMessage | null;
  getCoinHandler: () => void;
}

interface IOrders {
  newCoinAmount?: number;
  newOrders?: string[];
  status: string;
}

const GiveCoinModal = ({ setModalShow, message, getCoinHandler }: IProps) => {
  const [orders, setOrders] = useState<IOrders | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);

  const getOrdersHandler = async () => {
    setLoading(true);
    if (!message?.userId || loading) return;
    const formatDate = formatDateToYYYYMMDD(date);
    const result = await axios.post(
      'https://itsus.co.kr:5555/api/imall/giveCoinTest',
      { ...message, date: formatDate },
    );
    setOrders(result.data);
    if (result.data.status === 'ok') getCoinHandler();
    setLoading(false);
  };
  console.log(date);
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
            dateFormat={`${formatThreeMonthsDay(date)} ~ yyyy년 MM월 dd일`}
          />
          <S.DateButton onClick={() => getOrdersHandler()}>조회</S.DateButton>
        </div>
        <span>
          선택하신 날짜 기준 3개월 주문목록을 자동조회 후 마음이 지급됩니다.
        </span>
      </S.DateWrapper>
      <S.HeartResultWrapper>
        {loading ? <Loading /> : <p>{orders?.newCoinAmount}</p>}
      </S.HeartResultWrapper>
      <S.CheckButton onClick={() => setModalShow(false)}>닫기</S.CheckButton>
    </S.Wrapper>
  );
};

export default GiveCoinModal;
