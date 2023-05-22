import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  padding: 10px;
  background: var(--light-gray);
  border-radius: 15px;
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    word-break: keep-all;
    line-height: 1.2;
  }
  .require {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 5px;
    border-bottom: 0.5px solid #d1d1d1;
    p {
      text-align: left;
      word-break: unset;
      &::before {
        content: '- ';
      }
    }
  }
`;
