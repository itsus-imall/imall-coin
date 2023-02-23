import { Dispatch, SetStateAction } from 'react';
import * as S from './styled.MainMoal';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  prize: string;
}

const MainModal = ({ setModalShow, prize }: IProps) => {
  const onClick = () => setModalShow(false);
  return (
    <S.Wrapper>
      <S.Contents>
        <p>
          {prize !== ''
            ? `축하드립니다 ${prize}이(가) 당첨되었습니다!`
            : '코인이 없습니다!'}
        </p>
        <button onClick={onClick}>닫기</button>
      </S.Contents>
    </S.Wrapper>
  );
};

export default MainModal;
