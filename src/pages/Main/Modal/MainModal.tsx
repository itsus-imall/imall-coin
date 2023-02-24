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

const MainModal = ({ setModalShow, prize, userId }: IProps) => {
  const [productPrize, setProductPrize] = useState(false);

  useEffect(() => {
    message[prize] && setProductPrize(true);
  }, [prize]);

  const modalCheckHandler = (info?: {}) => {
    if (productPrize) {
      console.log(info, userId);
      axios.post('https://itsus.co.kr:5555/api/imall/prize/info', {
        userId,
        ...info,
        prize,
      });
    }
    setModalShow(false);
  };

  return (
    <S.Wrapper>
      <S.Contents>
        <p>
          {prize !== ''
            ? `축하드립니다 ${prize}이(가) 당첨되었습니다!`
            : '코인이 없습니다!'}
        </p>
        {productPrize ? (
          <PrizeProdutForm modalCheckHandler={modalCheckHandler} />
        ) : (
          <S.CheckButton onClick={modalCheckHandler}>확인</S.CheckButton>
        )}
      </S.Contents>
    </S.Wrapper>
  );
};

export default MainModal;
