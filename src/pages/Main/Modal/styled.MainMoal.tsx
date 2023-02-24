import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 80%;
  max-width: 800px;
  background: #fff;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  border-radius: 15px 15px 0 0;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
