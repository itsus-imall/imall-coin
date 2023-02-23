import { createPortal } from 'react-dom';
import * as S from './styled';

interface IProps {
  children?: React.ReactNode;
}

const CustomModal = ({ children }: IProps) => {
  const potalElement = document.querySelector('#modal');

  return (
    <>
      {createPortal(
        <S.Wrapper>
          <S.Overlay />
          {children}
        </S.Wrapper>,
        potalElement!,
      )}
    </>
  );
};

export default CustomModal;
