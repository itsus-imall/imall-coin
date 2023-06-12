import { useState } from 'react';
import { IMessage } from '..';
import CustomModal from '../../../components/CustomModal';
import { loginHandler } from '../../../service/login';
import GiveCoinModal from './Modal';
import * as S from './styled';

interface IProps {
  message: IMessage | null;
  getCoinHandler: () => void;
}

export default function CoinGive({ message, getCoinHandler }: IProps) {
  const [modalShow, setModalShow] = useState(false);

  const giveCoinHandler = () => setModalShow(true);

  return (
    <S.Wrapper>
      <S.GiveCoinButton
        onClick={message?.userId ? giveCoinHandler : loginHandler}
      >
        클릭하고 마음 받기
      </S.GiveCoinButton>
      <S.CautionWrapper>
        <li>
          마음 응모권은 <span>실제결제금액 기준 1만원당 마음 1개씩 지급</span>
          됩니다.
        </li>
        <img src='/images/썸머x마음_기획전02_06.jpg' alt='상품모음' />
        <li>
          주문상태가 <span>배송완료 주문건만 지급</span>됩니다.
        </li>
        <li>
          <span>2023년3월1일 이후 주문건부터</span> 지급됩니다.
        </li>
        <li>
          <span>실결제 금액이 1만원 이상</span> 주문건만 지급됩니다.
          <br />( 쿠폰,적립급 제외 )
        </li>
        <li>
          마음을 받으시면 <span>교환 및 환불이 불가능</span>합니다.
        </li>
      </S.CautionWrapper>
      {modalShow ? (
        <CustomModal>
          <GiveCoinModal
            setModalShow={setModalShow}
            message={message}
            getCoinHandler={getCoinHandler}
          />
        </CustomModal>
      ) : null}
    </S.Wrapper>
  );
}
