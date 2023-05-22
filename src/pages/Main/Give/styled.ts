import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 86%;
  background: var(--light-gray);
  padding: 30px;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
  width: 200px;
  padding: 15px 10px;
  font-size: 1rem;
  border-radius: 15px;
  font-weight: bold;
  background: #fff;
  border: 2px solid var(--red);
  cursor: pointer;
  color: var(--red);
`;

export const CautionWrapper = styled.ul`
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  li {
    font-size: 14px;
    margin-bottom: 5px;
    line-height: 1.2;
    span {
      color: var(--red);
      font-weight: bold;
    }
  }
  li::before {
    content: '- ';
  }
  li:last-child {
    margin-bottom: 0;
  }
`;
