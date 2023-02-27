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
  .box {
    width: 100%;
    cursor: pointer;
  }
  .prize {
    height: 66%;
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translateX(-50%);
    animation: move 1s ease-in Infinite Alternate;
  }
  @keyframes move {
    0% {
      top: -5%;
    }
    100% {
      top: 0%;
    }
  }
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .content {
    position: relative;
  }
  .prize-title {
    text-align: center;
    font-weight: bold;
  }
  .content-title {
    text-align: center;
    color: #515151;
    font-weight: 400;
  }
  p {
    text-align: center;
  }
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
