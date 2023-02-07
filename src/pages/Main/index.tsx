import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styled';
import Loading from '../../components/Loading';

interface ICoin {
  total?: number;
  order?: [];
}

const Main = () => {
  const [coin, setCoin] = useState<ICoin>({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<null | {}>(null);

  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.origin !== 'https://youngwuk2.cafe24.com') return;
      // setMessage({ userId: event.data.userId, type: event.data.type }); // 아이프레임 실제
    });
    setMessage({ userId: '1351744123@k', type: 'coin' }); // 테스트
  }, []);

  useEffect(() => {
    if (!message) return;
    const getCoin = async () => {
      const { data } = await axios.post(
        'https://itsus.co.kr:5555/api/imall/getMemo',
        message,
      );
      setCoin(data);
      setLoading(false);
    };
    getCoin();
  }, [message]);

  return <S.Wrapper>{loading ? <Loading /> : coin.total}</S.Wrapper>;
};

export default Main;
