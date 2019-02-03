const notSupported = (req, res) => res
  .status(205)
  .json({ error: 'Not supported' })
  .end();

module.exports = notSupported;
