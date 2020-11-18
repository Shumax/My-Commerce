const url = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : '';

export default {
  url,
};
