import { VectorClient, type VectorClientResponse } from "sst";

/**
 * Global instance of the Vector database client.
 * @private
 */
let client: VectorClientResponse | undefined

/**
 * Initializes the Vector database client by connecting to the VectorDB resource.
 * @private
 */
const getClient = () => {
    client = VectorClient("VectorDB")
}

/**
 * Stores a vector with associated metadata in the vector database.
 * @param {number[]} vector - The embedding vector to store
 * @param {Record<string, string | number | boolean | object>} metadata - Additional data to associate with the vector
 * @returns {Promise<void>}
 */
const put = async (vector: number[], metadata: Record<string, string | number | boolean | object>) => {
    if (!client) getClient()
    await client!.put({ vector, metadata })
}

/**
 * Queries the vector database for similar vectors.
 * @param {number[]} vector - The embedding vector to search for similar vectors
 * @returns {Promise<any>} The query results containing similar vectors and their metadata
 * @todo Make include, count, and threshold parameters configurable
 */
const query = async (vector: number[]) => {
    if (!client) getClient()
    const result = await client!.query({
        vector,
        include: {
            recipe: 'Indian',
        },
        count: 18,
        threshold: 0.4,
    })
    return result
}

/**
 * Client for interacting with the vector database.
 * Provides methods for storing and querying vector embeddings.
 */
export const vectorClient = {
    put,
    query,
}