import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styled';

import Loading from '../../components/Loading';
import CustomModal from '../../components/CustomModal';
import MainModal from './MainModal';
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
      if (event.origin !== 'https://youngwuk2.cafe24.com') return;
      console.log(event.data);
      setMessage({ userId: event.data.id, type: event.data.type }); // 아이프레임 실제
    });
  }, []);
  // setMessage({ userId: '1351744123@k', type: 'coin' }); // 테스트

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

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <div>{message!.userId ? coin.total : '로그인 후 이용해주세요.'}</div>
        {message!.userId ? (
          <PickButton
            setModalShow={setModalShow}
            message={message}
            setPrize={setPrize}
            setCoin={setCoin}
          />
        ) : null}
      </S.ContentWrapper>
      {modalShow ? (
        <CustomModal setModalShow={setModalShow}>
          <MainModal setModalShow={setModalShow} prize={prize} />
        </CustomModal>
      ) : null}
    </S.Wrapper>
  );
};

export default Main;
