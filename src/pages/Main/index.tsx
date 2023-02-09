import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styled';
import Loading from '../../components/Loading';
import PickButton from '../PickButton';
import CustomModal from '../../components/CustomModal';
import MainModal from './MainModal';

export interface ICoin {
  total?: number;
  order?: [];
}

const Main = () => {
  const [coin, setCoin] = useState<ICoin>({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<null | {}>(null);
  const [modalShow, setModalShow] = useState(false);
  const [prize, setPrize] = useState('');

  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.origin !== process.env.REACT_APP_MESSEAGE_ORIGIN) return;
      // setMessage({ userId: event.data.userId, type: event.data.type }); // 아이프레임 실제
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
      setLoading(false);
    };
    getCoin();
  }, [message]);

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Wrapper>
      {coin.total}
      <PickButton
        setModalShow={setModalShow}
        message={message}
        setPrize={setPrize}
        setCoin={setCoin}
      />
      {modalShow ? (
        <CustomModal setModalShow={setModalShow}>
          <MainModal setModalShow={setModalShow} prize={prize} />
        </CustomModal>
      ) : null}
    </S.Wrapper>
  );
};

export default Main;
