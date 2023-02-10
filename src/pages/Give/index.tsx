import { useEffect } from 'react';

const Give = () => {
  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.origin !== process.env.REACT_APP_MESSEAGE_ORIGIN) return;
      console.log(event.data);
    });
  }, []);
  return <></>;
};

export default Give;
