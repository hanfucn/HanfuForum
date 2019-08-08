module.exports = {
  NODE_ENV: '"development"',
  API: {
    BASE_URL: 'http://127.0.0.1:8000/',
    TIMEOUT: 5000,
    WITHCREDENTIALS: false,
    XSRFCOOKIENAME: 'csrftoken',
    XSRFHEADERNAME: 'X-CSRFToken',
    TOKENPREFIX: 'JWT'
  }
}