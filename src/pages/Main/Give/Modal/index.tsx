import { Dispatch, SetStateAction } from 'react';

import * as S from './styled';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
}

export default function GiveCoinModal({ setModalShow }: IProps) {
  return (
    <S.Wrapper>
      <S.CheckButton onClick={() => setModalShow(false)}>닫기</S.CheckButton>
    </S.Wrapper>
  );
}
