import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 80%;
  max-width: 800px;
  background: #fff;
  position: relative;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 15px 15px 0 0;
  margin-top: 50px;
`;

export const CheckButton = styled.button`
  width: 100%;
  height: 50px;
  background: var(--red);
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  border: 0;
  border-radius: 0 0 15px 15px;
`;

export const DateWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  & > span {
    font-size: 13px;
    letter-spacing: -0.5px;
    color: #999;
    word-break: keep-all;
  }
  .date_contents {
    margin-bottom: 5px;
    display: flex;
    gap: 12px;
  }
`;

export const DateButton = styled.button`
  box-sizing: border-box;
  border: 0;
  flex: 1 1 40%;
  border-radius: 5px;
`;

export const DatePickerInput = styled(DatePicker)`
  width: 100%;
  border: 0;
  color: #fff;
  background: var(--red);
  position: relative;
  box-sizing: border-box;
  padding: 10px 5px;
  text-align: center;
  border-radius: 5px;
`;
