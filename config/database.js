require('dotenv').config();
const { MongoClient } = require('mongodb');
const url = process.env.DATABASE_URL;
const client = new MongoClient(url);



const database =  async ()=>{
  const dbName = process.env.DATABASE_NAME;

  try{
  
    await client.connect();
    console.log('Database Connected Successfully');
    const db =  client.db(dbName);
    return db

  } catch(error) {
    conseol.log( "Couldn't connect to database")
  }
}
 

module.exports = database;



// // Another way 
// const main =  async ()=>{
//   const dbName = process.env.DATABASE_NAME;

//   try{
  
//     await client.connect();
//     console.log('Database Connected Successfully');
//     const db =  client.db(dbName);
//     // const collection = db.collection('detail')
//     // client.close()
//     // return {
//     //   collection
//     // }
//     return db

//   } catch(error) {
//     conseol.log( "Couldn't connect to database")
//   }
// }
 

// module.exports = main;