import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  /* max-width: 800px; */
  /* margin: 0 auto; */
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  img {
    width: 100%;
  }
  .login {
    background: #fe3362;
    padding: 20px 30px;
    color: #fff;
    border: 0;
    font-size: 18px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 5px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .heart-counter {
    color: #fff;
    letter-spacing: 1px;
    strong {
      font-size: 18px;
      text-decoration: underline;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #015aff;
  gap: 20px;
  padding-bottom: 20px;
`;
