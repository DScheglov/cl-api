const HttpError = require('./HttpError');

const toJSON = entity => entity.toJSON();

const success = (res, code) => entity => {
  res.status(code);
  if (entity !== undefined) {
    res.json(entity);
  }
  res.end();
};

const error = res => err => res
  .status(err.code || 500)
  .json({ error: err.message })
  .end();

const rejectNotFound = entity => (
  entity == null
    ? Promise.reject(new HttpError(404, 'Not Found'))
    : Promise.resolve(entity)
);

const empty = () => {};

module.exports = {
  toJSON,
  success,
  error,
  rejectNotFound,
  empty,
};
