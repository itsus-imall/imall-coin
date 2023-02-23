import { useEffect, useState } from 'react';
import axios from 'axios';

const message: Record<string, string> = {
  'zero-coin': '실결제금액이 1만원 이상만\n마음을 받을 수 있습니다.',
  'event-date': '이벤트기간 내 주문건만 마음을 받을 수 있습니다.',
  overlap: '해당 주문건은 이미 마음을 받은 주문건입니다.',
  shipping: '주문상태가 배송완료인 주문건만 마음을 받을 수 있습니다.',
};
interface ICoinAmount {
  coinAmount?: number | boolean | null;
  status: string;
}

const Give = () => {
  const [coinState, setCoinState] = useState<ICoinAmount | null>(null);
  useEffect(() => {
    window.addEventListener('message', async event => {
      // if (event.origin !== process.env.REACT_APP_MESSEAGE_ORIGIN) return;
      const { orderNumber, userId, type } = event.data;
      if (!orderNumber || !userId || type === 'webpackClose') return;
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
    window.parent.postMessage(
      message[coinState.status] ??
        `${coinState.coinAmount}개의 마음이 지급되었습니다.`,
      '*',
    );
  }, [coinState]);

  return null;
};

export default Give;
