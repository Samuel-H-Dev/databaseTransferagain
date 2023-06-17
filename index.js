///-----------Importing MongoDB----------///
import { MongoClient } from "mongodb";
import { mongoURI } from "./secrets.js";

///-----------Importing mySQL2----------///
import mysql from 'mysql2';
import { mysqlConnect } from './secrets.js';

// Connecting to MySQL
const connection = mysql.createConnection(mysqlConnect);

/// Connecting to MongoDB
const MongoDBName = 'c11-practice';


const mongoConnect = new MongoClient(mongoURI);
await mongoConnect.connect();

const mongoDB = mongoConnect.db(MongoDBName);

////--------added code below

let moviesLists;


moviesLists = connection.query("SELECT * FROM MovieTable",
  async function (error, results) {
    console.log(error);

    // console.log(results)
    moviesLists = results;

    //console.log(moviesLists);
    console.log(moviesLists);
    
    await mongoDB.collection("movies").insertMany(moviesLists)
    connection.end();
    mongoConnect.close();
  }
)

///------------ends here 


