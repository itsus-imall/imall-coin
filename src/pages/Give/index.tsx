import { useEffect, useState } from 'react';
import axios from 'axios';

const Give = () => {
  const [coinAmount, setCoinAmount] = useState<number | boolean>(0);
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
  console.log(coinAmount);
  return null;
};

export default Give;
