const url = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000'
  : '';

export default {
  url,
};
