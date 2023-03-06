import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import PrizeProdutForm from './PrizeProdutForm';
import * as S from './styled.MainMoal';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  prize: string;
  userId: string;
}
const message: Record<string, boolean> = {
  'iPad Air 10.9 Wi-Fi 64GB': true,
  '에어팟 3세대': true,
  '신세계 백화점 상품권 10만원': true,
};

const prizeImg: Record<string, string> = {
  'iPad Air 10.9 Wi-Fi 64GB': '/images/이벤트상품_아이패드.png',
  '에어팟 3세대': '/images/이벤트상품_에어팟.png',
  '신세계 백화점 상품권 10만원': '/images/이벤트상품_상품권.png',
  '적립금 30,000원': '/images/이벤트상품_고액적립금.png',
  '적립금 10,000원': '/images/이벤트상품_고액적립금.png',
};

const prizeTax: Record<string, string> = {
  'iPad Air 10.9 Wi-Fi 64GB': '204,380원',
  '에어팟 3세대': '59,180원',
  '신세계 백화점 상품권 10만원': '22,000원',
};

const MainModal = ({ setModalShow, prize, userId }: IProps) => {
  const [productPrize, setProductPrize] = useState(false);
  const [clickCounter, setClickCounter] = useState(1);

  useEffect(() => {
    message[prize] && setProductPrize(true);
  }, [prize]);

  const modalCheckHandler = (info?: {}) => {
    if (productPrize) {
      axios.post('https://itsus.co.kr:5555/api/imall/prize/info', {
        userId,
        ...info,
        prize,
      });
    }
    setModalShow(false);
  };

  const PrizeOpen = () => {
    return (
      <>
        {prize === '' ? (
          '사용할 코인이 없습니다.'
        ) : (
          <>
            <img
              className='box'
              src='/images/이벤트상자_001.jpg'
              alt='선물상자'
            />
            <img
              className='box'
              src='/images/이벤트상자_002.jpg'
              alt='선물상자'
            />
            <img
              className='box'
              src='/images/이벤트상자_003.jpg'
              alt='선물상자'
            />
          </>
        )}
        <S.CheckButton>
          {prize === '' ? '닫기' : '선물을 받을려면 화면을 클릭하세요!'}
        </S.CheckButton>
      </>
    );
  };

  const PrizeResult = () => {
    return (
      <>
        <div className='content'>
          <img
            className='box end'
            src='/images/이벤트상자_004.jpg'
            alt='선물상자'
          />
          <img
            className='prize'
            src={prizeImg[prize] ?? '/images/이벤트상품_저액적립금.png'}
            alt='상품'
          />
        </div>
        <h2 className='content-title'>축하합니다</h2>
        <p className='prize-title'>{prize}</p>
        <p>당첨되셨습니다!</p>
        {productPrize ? (
          <PrizeProdutForm
            modalCheckHandler={modalCheckHandler}
            tax={prizeTax[prize]}
          />
        ) : (
          <S.CheckButton onClick={modalCheckHandler}>확인</S.CheckButton>
        )}
      </>
    );
  };

  const prizeOpenHandler = () => {
    if (prize === '') setModalShow(false);
    if (clickCounter > 3) return;
    setClickCounter(prev => prev + 1);
  };

  return (
    <S.Wrapper count={clickCounter}>
      <S.Contents onClick={prizeOpenHandler}>
        {clickCounter > 3 ? <PrizeResult /> : <PrizeOpen />}
      </S.Contents>
    </S.Wrapper>
  );
};

export default MainModal;
