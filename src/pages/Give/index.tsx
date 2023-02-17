import { useEffect, useState } from 'react';
import axios from 'axios';

const message: Record<string, string> = {
  'event-date': '이벤트기간동안의 주문상품이 아닙니다.',
  overlap: '이미 코인을 받은 주문입니다.',
};
interface ICoinAmount {
  coinAmount?: number | boolean | null;
  status: string;
}

const Give = () => {
  const [coinState, setCoinState] = useState<ICoinAmount | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.addEventListener('message', async event => {
      // if (event.origin !== process.env.REACT_APP_MESSEAGE_ORIGIN) return;
      const { orderNumber, userId, type } = event.data;
      if (!orderNumber && !userId && type === 'webpackClose') return;
      const result = await axios.post(
        'https://itsus.co.kr:5555/api/imall/giveCoin',
        {
          orderNumber,
          userId,
          type,
        },
      );
      setCoinState(result.data);
    });
  }, []);
  useEffect(() => {
    if (!coinState) return;
    window.parent.postMessage(message[coinState.status] ?? coinState, '*');
  }, [coinState]);

  return null;
};

export default Give;
