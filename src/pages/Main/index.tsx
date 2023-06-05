import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styled';

import Loading from '../../components/Loading';
import CustomModal from '../../components/CustomModal';
import MainModal from './Modal/MainModal';
import PickButton from '../../components/PickButton';
import TotalPrize from './TotalPrize';
import Explantion from './Explantion';

import './style.css';
import CoinGive from './Give';
import { loginHandler } from '../../service/login';

export interface ICoin {
  total?: number;
  order?: [];
}

export interface IMessage {
  userId: string | null;
  type: string;
}

const test = false;

const Main = React.memo(() => {
  const [coin, setCoin] = useState<ICoin>({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<null | IMessage>(null);
  const [modalShow, setModalShow] = useState(false);
  const [prize, setPrize] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

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
    if (test) return setMessage({ userId: 'wmh1245', type: 'coin' }); // 아이프레임 테스트
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
    window.addEventListener('message', event => getIdHandler(event));
    return () => window.removeEventListener('message', getIdHandler);
  }, []);

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

  useEffect(() => {
    if (!message) return;
    if (message.userId) {
      getCoinHandler();
      setLoading(false);
    }
  }, [message, getCoinHandler]);

  if (loading && !message) {
    return <Loading />;
  }
  return (
    <S.Wrapper>
      <S.ContentWrapper className='content-wrapper'>
        <>
          <CoinGive message={message} getCoinHandler={getCoinHandler} />
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
});

export default Main;
