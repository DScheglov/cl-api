class HttpError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    Error.captureStackTrace(this, HttpError);
  }
}

module.exports = HttpError;
