import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #015aff;
`;

export const TitleWrppaer = styled.div`
  text-align: center;
  h2 {
    font-size: 24px;
  }
  p {
    color: var(--red);
    margin-bottom: 10px;
  }
`;

export const GiveCoinButton = styled.button`
  padding: 20px 30px;
  font-size: 24px;
  font-weight: bold;
  background: #fe3362;
  cursor: pointer;
  color: #fff;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 5px;
`;

export const CautionWrapper = styled.ul`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.25);
  overflow: hidden;
  color: #f1f1f1;
  & > img {
    transform: translateX(-30px);
  }
  li {
    font-size: 14px;
    margin-bottom: 8px;
    line-height: 1.2;
    span {
      font-weight: bold;
    }
  }
  li::before {
    content: '※ ';
  }
  li:last-child {
    margin-bottom: 0;
  }
`;
