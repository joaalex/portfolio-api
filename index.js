require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const app = express();
const database = require('./config/database');
const bodyParser = require('body-parser');
const details = require('./route/detailRoute');
const skills = require('./route/skillsRoute');
// const detailsSchema = require('./validate/detailsValidation')
// const createDetails = require('./controllers/detailsController');

let db;

app.use(bodyParser.json());

app.use("/api/details" , details);

app.use("/api/skills", skills);


database()
.then(res =>{
  // console.log(res)
  db = res;
  app.listen(port , ()=>{
    console.log(`Server connected to http://127.0.0.1:${port}`);
  });
})
.catch((error) => {
  console.log(`Something went wrong`);
});



// app.post('/details', createDetails)

// app.post('/details', async (req,res)=>{

//   // const{firstname, surname, dob, address, email, phone, date } = req.body;

//  try{ 
//    detailsSchema(req.body)

//   if( error !== undefined){
//     res.status(404).json({
//       status: false,
//       message: error.message
//     });
//     return;
//   }

//   const detailCollection = db.collection('detail');
//   // email:`${email}`, phone:`${phone}`

//   const detailAlreadyExists = await detailCollection.findOne({ email: req.body.email, phone: req.body.phone});
//   // const detailAlreadyExists = await detailCollection.findOne({ email: email, phone: phone});
//   console.log(detailAlreadyExists);

//   if(detailAlreadyExists) {
//     res.status(404).json({
//       status: 'error',
//       message: 'User Detail already exists'
//     });
//     return ;
//   };

//   // req.body.id = uuidv4();
//   // db.collection.insertOne(req.body)
//   //   .then(result => {
//   //     console.log(result)
      
//   //     res.status(200).json({
//   //       status: 'success',
//   //       message: 'Detail added successfully.'
//   //     });
//   // })
//   // .catch(err => { 
//   //     console.log(err)
      
//   //     res.status(400).json({
//   //         ok: false,
//   //         msg: 'Something webnt wrong, please try again later',
//   //         error: err.message
//   //     });
//   // })  

//   req.body.id = uuidv4();
//   const insertedDetail = await detailCollection.insertOne(req.body);
//   console.log(insertedDetail)

//   res.status(200).json({
//     status: 'success',
//     message: 'Detail added successfully.'
//   });
// } catch (error) {

//     console.log(error.message);

//     res.status(404).json({
//       status: 'error',
//       message: error.message
//     });
//  };

// });