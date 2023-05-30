import axios from 'axios';
import { useEffect, useState } from 'react';

const TotalPrize = () => {
  const [prizeCount, setPrizeCount] = useState([]);

  useEffect(() => {
    getTotalPrizeCount();
  }, []);

  const getTotalPrizeCount = async () => {
    const { data } = await axios.get(
      'https://itsus.co.kr:5555/api/imall/getTotalPrize',
    );
    setPrizeCount(data);
  };
  return (
    <>
      <div className='total-prize-count-wrapper'>
        <div className='title'>
          <p>누가누가 당첨됐나?</p>
          <h2>현재 당첨 현황</h2>
          <span>당첨 상품의 개수 제한은 없습니다</span>
        </div>
        <div className='contents'>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_아이패드.png'
              alt='prize'
            />
            <p>iPad Air 10.9 Wi-Fi 64GB</p>
            <span>{`${prizeCount[0] ?? 0}명`}</span>
          </div>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_에어팟.png'
              alt='prize'
            />
            <p>에어팟 3세대</p>
            <span>{`${prizeCount[1] ?? 0}명`}</span>
          </div>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_상품권.png'
              alt='prize'
            />
            <p>신세계백화점 상품권 10만원</p>
            <span>{`${prizeCount[2] ?? 0}명`}</span>
          </div>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_고액적립금.png'
              alt='prize'
            />
            <p>적립금 30,000원</p>
            <span>{`${prizeCount[3] ?? 0}명`}</span>
          </div>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_고액적립금.png'
              alt='prize'
            />
            <p>적립금 10,000원</p>
            <span>{`${prizeCount[4] ?? 0}명`}</span>
          </div>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_저액적립금.png'
              alt='prize'
            />
            <p>적립금 5,000원</p>
            <span>{`${prizeCount[5] ?? 0}명`}</span>
          </div>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_저액적립금.png'
              alt='prize'
            />
            <p>적립금 3,000원</p>
            <span>{`${prizeCount[6] ?? 0}명`}</span>
          </div>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_저액적립금.png'
              alt='prize'
            />
            <p>적립금 1,000원</p>
            <span>{`${prizeCount[7] ?? 0}명`}</span>
          </div>
          <div className='content'>
            <img
              src='https://img.i-m-all.com/자사몰/이벤트/2023마음이벤트/이벤트상품_저액적립금.png'
              alt='prize'
            />
            <p>적립금 500원</p>
            <span>{`${prizeCount[8] ?? 0}명`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalPrize;
