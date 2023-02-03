import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Main = () => {
  window.addEventListener('message', event => {
    console.log(event.data);
  });
  return <Wrapper>Main</Wrapper>;
};

export default Main;
