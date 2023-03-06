import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styled';

import Loading from '../../components/Loading';
import CustomModal from '../../components/CustomModal';
import MainModal from './Modal/MainModal';
import PickButton from '../../components/PickButton';
import TotalPrize from './TotalPrize';
import Explantion from './Explantion';

import './style.css';

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
  const [imageLoaded, setImageLoaded] = useState(false);

  const loginHandler = () => {
    window.parent.postMessage({ status: 'login-check', value: 'login' }, '*');
  };
  const windowHeightHandler = () => {
    const element = document.querySelector('.content-wrapper') as HTMLElement;
    window.parent.postMessage(
      { status: 'height', value: element.clientHeight },
      '*',
    );
  };
  const imgLoadHandler = () => {
    setImageLoaded(true);
  };
  const getIdHandler = (event: any) => {
    if (
      event.origin === 'https://youngwuk2.cafe24.com' ||
      event.origin === 'https://i-m-all.com' ||
      event.origin === 'https://m.i-m-all.com' ||
      event.origin === 'https://www.i-m-all.com'
    ) {
      setMessage({ userId: event.data.id, type: event.data.type }); // 아이프레임 실제
    }
  };
  const getCoinHandler = useCallback(async () => {
    const { data } = await axios.post(
      process.env.REACT_APP_GET_MEMO_URL!,
      message,
    );
    setCoin(data);
  }, [message]);

  useEffect(() => {
    if (!loading && imageLoaded) windowHeightHandler();
  }, [imageLoaded, loading]);

  useEffect(() => {
    // window.addEventListener('message', event => getIdHandler(event));
    setMessage({ userId: '1351744123@k', type: 'coin' });
    return () => window.removeEventListener('message', getIdHandler);
  }, []);

  useEffect(() => {
    if (!message) return;
    if (message.userId) getCoinHandler();
    setLoading(false);
  }, [message, getCoinHandler]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        windowHeightHandler();
      }, 300);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <S.Wrapper>
      <S.ContentWrapper className='content-wrapper'>
        <>
          <img src='/images/background.jpg' alt='상품모음' />
          {message!.userId ? (
            <>
              <div>보유중인 마음 갯수 : {coin.total}개</div>
              <PickButton
                setModalShow={setModalShow}
                message={message}
                setPrize={setPrize}
                setCoin={setCoin}
              />
              {modalShow ? (
                <CustomModal>
                  <MainModal
                    setModalShow={setModalShow}
                    prize={prize}
                    userId={message!.userId}
                  />
                </CustomModal>
              ) : null}
            </>
          ) : (
            <button className='login' onClick={loginHandler}>
              로그인 후 이용해주세요.
            </button>
          )}
          <img
            src='/images/고객감사이벤트_04.jpg'
            alt='무슨상품?'
            onLoad={imgLoadHandler}
          />
          <TotalPrize />
          <Explantion />
        </>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Main;
