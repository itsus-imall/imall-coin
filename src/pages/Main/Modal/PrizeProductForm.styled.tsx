import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  padding: 20px;
  background: var(--light-gray);
  border-radius: 15px;
  p {
    word-break: keep-all;
    line-height: 1.2;
  }
`;
