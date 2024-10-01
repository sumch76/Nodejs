const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://sumitchaubey76:Tq9KWbiJafPhz9qu@mongodbtest.9axqh.mongodb.net/";
  //Tq9KWbiJafPhz9qu

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Deepika",
    lastname: "Singh",
    city: "Mumbai",
    phoneNumber: "987543256",
  };

  const insertResult = await collection.insertOne(data);
  console.log("Inserted documents =>", insertResult);

  // Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const  updatedResult=await collection.updateOne({firstname: "Deepika"},
    {$set:{city:"delhi"}}
  );
  console.log(updatedResult);
  

  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the User collection =>", countResult);

  // Find all documents with a filter of firstname: Deepika

  const result = await collection.find({ firstname: "Deepika" }).count();
  console.log("result => ", result);

  const updatedDoc=await collection.find({ firstname: "Deepika"}).toArray();
  console.log("updated document details => ", updatedDoc);
  
  ///delete with a filter of firstname: Deepika
  // const deleteResult=await collection.deleteOne({firstname:"Deepika"})
  // console.log("deleteResult => ", deleteResult);

  

  return "done.";

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// INstall mongodb package
// Create a connection from code
// Documents CRUD - CReate, REad, Update, Delete
