import { useEffect } from 'react';
import axios from 'axios';

const Give = () => {
  useEffect(() => {
    window.addEventListener('message', async event => {
      // if (event.origin !== process.env.REACT_APP_MESSEAGE_ORIGIN) return;
      const { orderNumber, userId } = event.data;
      await axios.post('https://itsus.co.kr:5555/api/imall/giveCoin', {
        orderNumber,
        userId,
      });
    });
  }, []);
  return null;
};

export default Give;
