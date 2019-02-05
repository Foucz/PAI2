const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/baza', (err,client) => {
  if(err){
    console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('baza')


  db.collection('Wiadomosci').find().toArray().then((docs)=>{
      console.log('Wiadomosci');
      console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });

//  client.close();
});
