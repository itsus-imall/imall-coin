import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { ICoin } from '../../pages/Main';
import * as S from './styled';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  setCoin: Dispatch<SetStateAction<ICoin>>;
  setPrize: Dispatch<SetStateAction<string>>;
  message: null | {};
}

const PickButton = ({ setModalShow, message, setPrize, setCoin }: IProps) => {
  const PickButtonHandler = async () => {
    const res = await axios.post(
      'https://itsus.co.kr:5555/api/imall/useCoin',
      message,
    );
    setModalShow(true);
    if (!res.data) return setPrize('');
    setCoin(JSON.parse(res.data.memo));
    setPrize(res.data.prize);
  };

  return <S.Button onClick={PickButtonHandler}>클릭하고 상품 뽑기</S.Button>;
};

export default PickButton;
