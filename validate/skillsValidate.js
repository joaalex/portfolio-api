require('dotenv').config();
const Joi = require('joi');

const skillsValidate = (data) =>{
  const skillsSchema =Joi.object({
    skillsname: Joi.string().required(),
    description: Joi.string().required(),
    rating : Joi.number().required(),
  });

  return {error, value} = skillsSchema.validate(data)
};

module.exports = {skillsValidate}
