const {validateDetail, updateDetail} = require('../validate/detailsValidation')
const database = require('../config/database')
const { v4 : uuidv4}  = require('uuid')
let db ;


const getUserDetails = async (req, res)=>{

  try{

    const detailCollection = db.collection('detail');
    const userDetails = await detailCollection.find();

    console.log(userDetails);

    res.status(200).send({
      status : 'success',
      message : 'User details',
      data : userDetails
    });

  }catch(error){
    res.status(404).json({
      status: 'error',
      status: 'Something went wrong'
    });
  };
};


const createUserDetails = async (req,res)=>{

 try{ 
  validateDetail(req.body)

    if( error !== undefined){
      res.status(404).json({
        status: false,
        message: error.message
      }); 
      return;
    }

    const detailCollection = db.collection('detail');

    const detailAlreadyExists = await detailCollection.findOne({ email: req.body.email, phone: req.body.phone});
    console.log(detailAlreadyExists);

    if(detailAlreadyExists) {
      res.status(404).json({
        status: 'error',
        message: 'User Detail already exists'
      });
      return ;
    };

    req.body.id = uuidv4();
    const insertedDetail = await detailCollection.insertOne(req.body);
    console.log(insertedDetail);

    res.status(200).json({
      status: 'success',
      message: 'Detail added successfully.',
      data: insertedDetail
    });

  
  } catch (error) {

    console.log(error.message);

    res.status(404).json({
      status: 'error',
      message: error.message
    });
  };
};


const updateUserDetails = async (req, res) => {

  try{
    updateDetail(req.body)

    if( error !== undefined){
      res.status(404).json({
        status: false,
        message: error.message
      }); 
      return;
    };

    const  detailCollection  = db.collection('detail')
    const updatedDetail = await detailCollection.updateOne({ id: req.body.id}, {$set:req.body})
    console.log(updatedDetail)
    res.status(200).json({
      status: 'success',
      message: 'Updated Successfully.',
      data: updatedDetail
    });

  } catch (error) {

    console.log(error.message);
    res.status(404).json({
      status : 'error',
      message : error.message

    });

  };
};


database()
    .then(result =>{
      db = result
    })
    .catch(error => console.log(error));


    
module.exports = {
                  createUserDetails, 
                  updateUserDetails, 
                  getUserDetails
                };