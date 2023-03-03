import { useRef } from 'react';
import * as S from './PrizeProductForm.styled';
import { CheckButton } from './styled.MainMoal';

export interface IUserInfo {
  name: string;
  address: string;
  phoneNumber: string;
  idNumber: string;
}

interface IProps {
  modalCheckHandler: ({
    name,
    address,
    phoneNumber,
    idNumber,
  }: IUserInfo) => void;
}

const PrizeProdutForm = ({ modalCheckHandler }: IProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const idNumberRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameRef.current!.value;
    const address = addressRef.current!.value;
    const phoneNumber = phoneNumberRef.current!.value;
    const idNumber = idNumberRef.current!.value;
    if (name === '') return alert('이름을 입력해주세요');
    if (address === '') return alert('주소를 입력해주세요');
    if (phoneNumber === '') return alert('연락처를 입력해주세요');
    if (idNumber.length !== 14)
      return alert('주민등록번호를 제대로 입력해주세요');
    modalCheckHandler({
      name,
      address,
      phoneNumber,
      idNumber,
    });
    alert('참여해 주셔서 감사합니다!');
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <div className='require'>
        <h2>읽어주세요!</h2>
        <p>개인정보는 제세공과금 세금공제를 위해 입력받습니다.</p>
        <p>
          국민은행/839801-01-540085/주식회사 잇츠어스로 제세공과금을 보내주시면
          됩니다!
        </p>
        <p>
          제세공과금을 입금 하시고 난 후 수령인 정보를 입력해주셔야 당첨상품을
          배송해드립니다.
        </p>
        <p>개인정보는 제품을 보내고 난 후 일괄 삭제 합니다.</p>
      </div>
      <h2>수령인 정보입력</h2>
      <p>해당 정보를 입력하셔야 상품 수령을 하실 수 있습니다.</p>
      <input type='text' placeholder='이름' ref={nameRef} />
      <input type='text' placeholder='주소' ref={addressRef} />
      <input type='text' placeholder='연락처' ref={phoneNumberRef} />
      <input
        type='text'
        placeholder='주민등록번호( - 포함하여 입력)'
        ref={idNumberRef}
      />
      <CheckButton>확인</CheckButton>
    </S.Form>
  );
};

export default PrizeProdutForm;
