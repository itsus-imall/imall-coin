import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styled';

import Loading from '../../components/Loading';
import CustomModal from '../../components/CustomModal';
import MainModal from './Modal/MainModal';
import PickButton from '../../components/PickButton';

export interface ICoin {
  total?: number;
  order?: [];
}

interface IMessage {
  userId: string | null;
  type: string;
}

const Main = () => {
  const [coin, setCoin] = useState<ICoin>({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<null | IMessage>(null);
  const [modalShow, setModalShow] = useState(false);
  const [prize, setPrize] = useState('');

  useEffect(() => {
    window.addEventListener('message', event => {
      if (
        event.origin === 'https://youngwuk2.cafe24.com' ||
        event.origin === 'https://i-m-all.com' ||
        event.origin === 'https://m.i-m-all.com' ||
        event.origin === 'https://www.i-m-all.com'
      ) {
        // setMessage({ userId: event.data.id, type: event.data.type }); // 아이프레임 실제
      }
    });
    setMessage({ userId: '1351744123@k', type: 'coin' }); // 테스트
  }, []);

  useEffect(() => {
    if (!message) return;
    const getCoin = async () => {
      const { data } = await axios.post(
        process.env.REACT_APP_GET_MEMO_URL!,
        message,
      );
      setCoin(data);
    };
    if (message.userId) getCoin();
    setLoading(false);
  }, [message]);

  if (loading) {
    return <Loading />;
  }

  if (!message!.userId) {
    return <div>로그인 후 이용해주세요.</div>;
  }

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <>
          <img src='/images/background.jpg' alt='상품모음' />
          <div>보유중인 마음 갯수 : {coin.total}개</div>
          <PickButton
            setModalShow={setModalShow}
            message={message}
            setPrize={setPrize}
            setCoin={setCoin}
          />
        </>
      </S.ContentWrapper>
      {modalShow ? (
        <CustomModal>
          <MainModal
            setModalShow={setModalShow}
            prize={prize}
            userId={message!.userId}
          />
        </CustomModal>
      ) : null}
    </S.Wrapper>
  );
};

export default Main;
