import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import CustomModal from '../../components/CustomModal';
import * as S from './styled';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  setZeroCoin: Dispatch<SetStateAction<boolean>>;
  message: null | {};
}

const PickButton = ({ setModalShow, message, setZeroCoin }: IProps) => {
  const PickButtonHandler = async () => {
    const res = await axios.post(
      'https://itsus.co.kr:5555/api/imall/useCoin',
      message,
    );
    setModalShow(true);
    if (!res.data) {
      return setZeroCoin(false);
    }
  };

  return <S.Button onClick={PickButtonHandler}>뽑기</S.Button>;
};

export default PickButton;
