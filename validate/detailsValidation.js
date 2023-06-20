require('dotenv').config();
const Joi = require('joi');

const validateDetail = (data)=>{
  const detailsSchema = Joi.object({
    firstname: Joi.string().min(3).max(30).required(),
    surname: Joi.string().min(3).max(30).required(),
    dob: Joi.string().required(),
    address: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    date: new Date()
  });
  return {error, value} = detailsSchema.validate(data);
};

const updateDetail = (data)=>{
  const detailsSchema = Joi.object({
    id: Joi.string().required(),
    firstname: Joi.string().min(3).max(30).required(),
    surname: Joi.string().min(3).max(30).required(),
    dob: Joi.string().required(),
    address: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    date: new Date()
  });
  return {error, value} = detailsSchema.validate(data);
};

module.exports = {validateDetail, updateDetail };