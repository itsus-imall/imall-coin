import { useEffect, useState } from 'react';
import axios from 'axios';

interface ICoinAmount {
  coinAmount: number | boolean | null;
}

const Give = () => {
  const [coinAmount, setCoinAmount] = useState<ICoinAmount | null>(null);
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
      setCoinAmount(result.data);
    });
  }, []);
  useEffect(() => {
    if (!coinAmount) return;
    window.parent.postMessage(coinAmount, '*');
  }, [coinAmount]);

  return null;
};

export default Give;
