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
  'zero-coin':
    '받을 수 있는 마음이 없습니다. 날짜를 변경 후 다시 시도해 주세요.',
};

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  message: IMessage | null;
  getCoinHandler: () => void;
}

interface IOrders {
  newCoinAmount?: number;
  newOrders?: string[];
  bonusCoinAmount?: number;
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
      'https://itsus.co.kr:5555/api/imall/giveCoin',
      { ...message, date: formatDate },
    );
    setOrders(result.data);
    if (result.data.status === 'ok') getCoinHandler();
    setLoading(false);
  };

  return (
    <S.Wrapper>
      <S.DateWrapper>
        <div className='date_contents'>
          <h2>마음 받기</h2>
          <S.DatePickerInput
            selected={date}
            shouldCloseOnSelect
            onChange={(date: Date) => setDate(date)}
            locale={ko}
            minDate={new Date('2023-03-01')}
            maxDate={new Date()}
            dateFormat={`${formatThreeMonthsDay(date)}  ~  yyyy.MM.dd  ▼`}
          />
          <S.DateButton onClick={() => getOrdersHandler()}>
            날짜 선택 후 여기를 눌러주세요.
          </S.DateButton>
        </div>
        <span>
          선택하신 날짜 기준 3개월 주문목록을 자동조회 후 마음이 지급됩니다.
        </span>
      </S.DateWrapper>
      {loading ? (
        <Loading />
      ) : orders ? (
        <S.HeartResultWrapper>
          <ul>
            {status[orders.status] ?? (
              <>
                <li>
                  조회 주문 건수 : <strong>{orders.newOrders!.length}건</strong>
                </li>
                <li>
                  지급 마음 개수 : <strong>{orders.newCoinAmount}개</strong>
                </li>
                <li>
                  보너스 마음 개수 : <strong>{orders.bonusCoinAmount}개</strong>
                </li>
              </>
            )}
          </ul>
        </S.HeartResultWrapper>
      ) : null}
      <S.CheckButton onClick={() => setModalShow(false)}>닫기</S.CheckButton>
    </S.Wrapper>
  );
};

export default GiveCoinModal;
