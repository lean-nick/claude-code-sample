import { DynamoDBClient, PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { Resource } from 'sst'

export type SingleTableItem = {
    input: string;
    embedding: string;
};

const tableName = Resource.SingleTable.name
let client: DynamoDBClient | undefined

const getClient = () => {
    client = new DynamoDBClient()
}

const putItem = async (item: Record<string, any>) => {
    if (!client) getClient()
    const params = {
        TableName: tableName,
        Item: marshall(item),
    };
    const command = new PutItemCommand(params);
    await client!.send(command);
};

const getItem = async (input: string) => {
    const params = {
        TableName: tableName,
        Key: marshall({ input }),
    };
    const command = new GetItemCommand(params);
    const result = await client!.send(command);
    if (!result.Item) return undefined;
    return unmarshall(result.Item) as SingleTableItem;
};

export const dynamoClient = {
    getItem,
    putItem,
}