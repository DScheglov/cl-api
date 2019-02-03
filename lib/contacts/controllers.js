const { Contact } = require('../models');
const helpers = require('../common/helpers');


const list = (req, res) => Contact
  .findAll()
  .then(helpers.success(res, 200))
  .catch(helpers.error(res));

const create = (req, res) => Contact
  .create(req.body)
  .then(helpers.toJSON)
  .then(helpers.success(res, 201))
  .catch(helpers.error(res));

const details = (req, res) => Contact
  .findByPk(req.params.contactId)
  .then(helpers.rejectNotFound)
  .then(helpers.toJSON)
  .then(helpers.success(res, 200))
  .catch(helpers.error(res));

const update = (req, res) => Contact
  .findByPk(req.params.contactId)
  .then(helpers.rejectNotFound)
  .then(contact => contact.update(req.body))
  .then(helpers.success(res, 200))
  .catch(helpers.error(res));

const remove = (req, res) => Contact
  .findByPk(req.params.contactId)
  .then(helpers.rejectNotFound)
  .then(contact => contact.destroy())
  .then(helpers.empty)
  .then(helpers.success(res, 204))
  .catch(helpers.error(res));

module.exports = { list, create, details, update, remove };