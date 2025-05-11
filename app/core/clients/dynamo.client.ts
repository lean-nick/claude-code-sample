import { DynamoDBClient, PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";

let client: DynamoDBClient | undefined

const getClient = () => {
    client = new DynamoDBClient()
}

const putItem = async (tableName: string, item: Record<string, any>) => {
    if (!client) getClient()
    const params = {
        TableName: tableName,
        Item: item,
    };
    const command = new PutItemCommand(params);
    await client!.send(command);
};

const getItem = async (tableName: string, key: Record<string, any>) => {
    const params = {
        TableName: tableName,
        Key: key,
    };
    const command = new GetItemCommand(params);
    const result = await client!.send(command);
    return result.Item;
};

export const dynamoClient = {
    getItem,
    putItem,
}