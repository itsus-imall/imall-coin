import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
import { ICoin } from '../Main';
import * as S from './styled';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  setCoin: Dispatch<SetStateAction<ICoin>>;
  setPrize: Dispatch<SetStateAction<string>>;
  message: null | {};
}

const PickButton = ({ setModalShow, message, setPrize, setCoin }: IProps) => {
  const [loading, setLoading] = useState(true);

  const PickButtonHandler = async () => {
    const res = await axios.post(
      'https://itsus.co.kr:5555/api/imall/useCoin',
      message,
    );
    setModalShow(true);
    if (!res.data) return setPrize('');
    setCoin(JSON.parse(res.data.memo));
    setPrize(res.data.prize);
    setLoading(false);
    setTimeout(() => setLoading(true), 500);
  };

  return (
    <S.Button onClick={PickButtonHandler} disabled={!loading}>
      뽑기버튼
    </S.Button>
  );
};

export default PickButton;
