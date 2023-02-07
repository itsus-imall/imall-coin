import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
`;

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
      // setMessage({ userId: event.data.userId, type: event.data.type });
    });
    setMessage({ userId: '1351744123@k', type: 'coin' });
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

  return <Wrapper>{loading ? 'loading' : coin.total}</Wrapper>;
};

export default Main;
