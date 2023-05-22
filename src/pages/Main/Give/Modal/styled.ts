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
