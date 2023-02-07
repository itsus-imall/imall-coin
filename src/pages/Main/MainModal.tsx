import { Dispatch, SetStateAction } from 'react';
import * as S from './styled.MainMoal';

interface IProps {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  zeroCoin: boolean;
}

const MainModal = ({ setModalShow, zeroCoin }: IProps) => {
  const onClick = () => setModalShow(false);
  return (
    <S.Wrapper>
      <S.Contents>
        <p>
          {zeroCoin ? '축하드립니다 이게 당첨되었습니다!' : '코인이 없습니다!'}
        </p>
        <button onClick={onClick}>닫기</button>
      </S.Contents>
    </S.Wrapper>
  );
};

export default MainModal;
