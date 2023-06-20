const {skillsValidate} = require('../validate/skillsValidate');
const database = require('../config/database');
const { v4 : uuidv4 } = require('uuid');
let db ;

const createSkills = async (req, res) =>{
  
  try{

    skillsValidate(req.body);

    if(error !== undefined){
      res.status(400).json({
        status: 'error',
        message: error.message
      });
      return;
    };

    const skillCollection = db.collection('skills');

    req.body.id = uuidv4();
    const insertSkills = await skillCollection.insertOne(req.body);
    console.log(insertSkills);


  } catch(error){
    request.status(400).json({
      status: 'error',
      message: error.message
    });
  };
};

const updateSkills = async (req,res)=>{
  try {
    skillsValidate(req.body)

  if(error !== undefined){
    res.status(400).json({
      status: 'error',
      message: error.message
    });
    return;
  };

  const skillsCollection =  db.collection('skills');
  const skillsUpdate = await skillsCollection.updateOne({id : req.body.id}, {$set:req.body});
  res.status(200).json({
      status: 'success',
      message: 'Updated Successfully.',
      data: skillsUpdate
    });


    
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || "Something went wrong"
    });
  };
};

database()
  .then(res => db = res)
  .catch(error => console.log(error));


module.exports = { createSkills, updateSkills };