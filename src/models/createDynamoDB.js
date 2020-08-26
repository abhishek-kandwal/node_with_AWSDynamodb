'use strict';
require('dotenv').config();

var AWS = require("aws-sdk");

const AWSAccessKeyId = process.env.AWSAccessKeyId;
const AWSSecretKey = process.env.AWSSecretKey;
const aws_region = process.env.region;
const aws_endpoint = process.env.endpoint;
const DynamoDBtable = process.env.tableName;

AWS.config.update({
    accessKeyId: AWSAccessKeyId,
    secretAccessKey: AWSSecretKey,
    region: aws_region,
    endpoint: aws_endpoint
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : DynamoDBtable,
    KeySchema: [
        {AttributeName: "id", KeyType: "HASH"},
        {AttributeName: "name", KeyType: "RANGE"}
    ],    
    AttributeDefinitions: [       
        { AttributeName: "id", AttributeType: "N" },
        { AttributeName: "name", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

var dynamocreateTable = async () => { 
    let queryExecute = new Promise((res,rej)=> {
        dynamodb.createTable(params, function(err, data){
            if(err){
                console.log("unable to create", JSON.stringify(err, null , 2));
                rej(err);
            }
            else{
                console.log("created!", JSON.stringify(data, null , 2));
                res(JSON.stringify(data,null, 2));
            }
        })
    })
    const result = await queryExecute;
    return result;
};

module.exports = dynamocreateTable;