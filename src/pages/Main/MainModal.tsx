import { Dispatch, SetStateAction } from 'react';
import * as S from './styled.MainMoal';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
}

const MainModal = ({ setModalShow }: IProps) => {
  const onClick = () => setModalShow(false);
  return (
    <S.Wrapper>
      <S.Contents>
        <p>축하드립니다 이게 당첨되었습니다!.</p>
        <button onClick={onClick}>닫기</button>
      </S.Contents>
    </S.Wrapper>
  );
};

export default MainModal;
