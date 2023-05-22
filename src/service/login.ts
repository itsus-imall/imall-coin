export const loginHandler = () => {
  window.parent.postMessage({ status: 'login-check', value: 'login' }, '*');
};
