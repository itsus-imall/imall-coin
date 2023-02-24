import { useRef } from 'react';
import * as S from './PrizeProductForm.styled';
import { CheckButton } from './styled.MainMoal';

export interface IUserInfo {
  name: string;
  address: string;
  phoneNumber: string;
}

interface IProps {
  modalCheckHandler: ({ name, address, phoneNumber }: IUserInfo) => void;
}

const PrizeProdutForm = ({ modalCheckHandler }: IProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameRef.current!.value;
    const address = addressRef.current!.value;
    const phoneNumber = phoneNumberRef.current!.value;
    if (name === '') return alert('이름을 입력해주세요');
    if (address === '') return alert('주소를 입력해주세요');
    if (phoneNumber === '') return alert('연락처를 입력해주세요');
    modalCheckHandler({
      name,
      address,
      phoneNumber,
    });
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <h2>수령인 정보입력</h2>
      <p>해당 정보를 입력하셔야 상품 수령을 하실 수 있습니다.</p>
      <input type='text' placeholder='이름' ref={nameRef} />
      <input type='text' placeholder='주소' ref={addressRef} />
      <input type='text' placeholder='연락처' ref={phoneNumberRef} />
      <CheckButton>확인</CheckButton>
    </S.Form>
  );
};

export default PrizeProdutForm;
