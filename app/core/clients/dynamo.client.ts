import { DynamoDBClient, PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

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

const getItem = async (tableName: string, input: string) => {
    const params = {
        TableName: tableName,
        Key: marshall({ input }),
    };
    const command = new GetItemCommand(params);
    const result = await client!.send(command);
    return result.Item;
};

export const dynamoClient = {
    getItem,
    putItem,
}