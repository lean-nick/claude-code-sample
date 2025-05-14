import { DynamoDBClient, PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { Resource } from 'sst'

/**
 * Represents an item in the single-table DynamoDB design.
 * @interface SingleTableItem
 * @property {string} input - The search input text
 * @property {string} embedding - The vectorized representation of the input
 */
export type SingleTableItem = {
    input: string;
    embedding: string;
};

const tableName = Resource.SingleTable.name
let client: DynamoDBClient | undefined

/**
 * Initializes the DynamoDB client.
 * @private
 */
const getClient = () => {
    client = new DynamoDBClient()
}

/**
 * Stores an item in the DynamoDB table.
 * @param {Record<string, any>} item - The item to store in DynamoDB
 * @returns {Promise<void>}
 */
const putItem = async (item: Record<string, any>) => {
    if (!client) getClient()
    const params = {
        TableName: tableName,
        Item: marshall(item),
    };
    const command = new PutItemCommand(params);
    await client!.send(command);
};

/**
 * Retrieves an item from the DynamoDB table by its input key.
 * @param {string} input - The input key to look up
 * @returns {Promise<SingleTableItem | undefined>} The item if found, undefined otherwise
 */
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

/**
 * Client for interacting with DynamoDB.
 * Provides methods for storing and retrieving items from a single-table design.
 */
export const dynamoClient = {
    getItem,
    putItem,
}