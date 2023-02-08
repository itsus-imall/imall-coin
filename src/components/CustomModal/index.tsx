import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import * as S from './styled';

interface IProps {
  children?: React.ReactNode;
  setModalShow: Dispatch<SetStateAction<boolean>>;
}

const CustomModal = ({ children, setModalShow }: IProps) => {
  const potalElement = document.querySelector('#modal');

  const onClick = () => setModalShow(false);

  return (
    <>
      {createPortal(
        <S.Wrapper>
          <S.Overlay onClick={onClick} />
          {children}
        </S.Wrapper>,
        potalElement!,
      )}
    </>
  );
};

export default CustomModal;
