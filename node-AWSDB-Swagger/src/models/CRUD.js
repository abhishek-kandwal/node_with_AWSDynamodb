'use strict'
require('dotenv').config();

var AWS = require("aws-sdk");

const AWSAccessKeyId = process.env.AWSAccessKeyId;
const AWSSecretKey = process.env.AWSSecretKey;
const aws_endpoint = process.env.endpoint;
const aws_region = process.env.region;
const DynamoDBtable = process.env.tableName;

AWS.config.update({
    accessKeyId: AWSAccessKeyId,
    secretAccessKey: AWSSecretKey,
    region: aws_region,
    endpoint: aws_endpoint
});

var dynamodb = new AWS.DynamoDB.DocumentClient();


var dynamodbGet = async () => {
    
    var params = {
        TableName: DynamoDBtable,
        Key:{
            "id": 2,
            "name": "sudeep",
        }
    };

    let queryExecute = new Promise((res,rej)=> {
        dynamodb.get(params, function(err, data) {
            if (err) {
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                rej(err);
            } else {
                console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
                res(JSON.stringify(data, null , 2));
            }
        });
    });
    let result = queryExecute;
    return result;
}

var dynamodbInsert = async (InsertData) => {
    
    var params = {
        TableName : DynamoDBtable,
        Item: {
            "id": InsertData.id,
            "name": InsertData.name,
            "Info":{
                "class": InsertData.class,
                "hobby": InsertData.hobby
            }
        }
    };

    let queryExecute = new Promise((res, rej) =>{
        dynamodb.put(params, function(err, data){
            if(err){
                console.log("unable to create", JSON.stringify(err, null , 2));
                rej(err);
            }else {
                console.log('Inserted', JSON.stringify(data, null , 2));
                res(JSON.stringify(data, null , 2));
            }
        });
    });

    let result = await queryExecute;
    return result;
}

var dynamodbUpdate = async (UpdateData) => {
    
    var params = {
        TableName : DynamoDBtable,
        Key: {
            id: UpdateData.id,
            name: UpdateData.name
            },
            UpdateExpression: "set Info.hobby = :h",
            ExpressionAttributeValues:{
                ":h":UpdateData.hobby,
            },
            ReturnValues:"UPDATED_NEW"
        
    };

    let queryExecute = new Promise((res,rej)=> {
        dynamodb.update(params, function(err, data) {
            if (err) {
                console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                rej(err);
            } else {
                console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
                res(JSON.stringify(data, null , 2));
            }
        });
    });
    let result = queryExecute;
    return result;
}

var dynamodbDelete = async (DeleteData) => {

    var params = {
        TableName:DynamoDBtable,
        Key:{
            "id": DeleteData.id,
            "name": DeleteData.name,
        },
    };
    
    let queryExecute = new Promise((res,rej)=> {
        dynamodb.delete(params, function(err, data) {
            if (err) {
                console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
                rej(err);
            } else {
                console.log("delete succeeded:", JSON.stringify(data, null, 2));
                res(JSON.stringify(data, null , 2));
            }
        });
    });
    let result = queryExecute;
    return result;
}

module.exports = {
    "Insert" : dynamodbInsert,
    "Read" : dynamodbGet,
    "Update": dynamodbUpdate,
    "Delete": dynamodbDelete
}

