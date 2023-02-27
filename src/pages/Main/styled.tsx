import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  img {
    width: 100%;
  }
  .login {
    background: var(--red);
    padding: 25px 50px;
    color: #fff;
    border-radius: 15px;
    border: 0;
    font-size: 18px;
    cursor: pointer;
  }
`;
