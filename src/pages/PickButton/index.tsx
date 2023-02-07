import { Dispatch, SetStateAction } from 'react';
import * as S from './styled';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
}

const PickButton = ({ setModalShow }: IProps) => {
  const PickButtonHandler = () => setModalShow(true);

  return <S.Button onClick={PickButtonHandler}>뽑기</S.Button>;
};

export default PickButton;
