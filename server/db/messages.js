const db = require('./connection');
const Joi = require('joi');

const schema = Joi.object().keys({
  username: Joi.string().alphanum().required(),
  subject: Joi.string().required(),
  message: Joi.string().max(500).required(),
  imageURL: Joi.string().uri({
    scheme: [
      /https?/
    ]
  })
});

const messages = db.get('messages');

function getAllMessages() {
  return messages.find();
}

function create(message) {
  const result = Joi.validate(message, schema);
  if (result.err == null) {
    message.created = new Date();
    return messages.insert(message);
  } else {
    return Promise.reject(result.error);
  }
  
}

module.exports = {
  create,
  getAllMessages
};
