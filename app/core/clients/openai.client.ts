import OpenAI from "openai";

/**
 * Global instance of the OpenAI client.
 * @private
 */
let client: OpenAI | undefined

/**
 * Initializes the OpenAI client.
 * @private
 */
const getClient = () => {
    client = new OpenAI()
}

/**
 * Creates a vector embedding from the provided text input.
 * @param {string} input - The text to convert to an embedding vector
 * @returns {Promise<number[]>} The embedding vector representation of the input
 */
const createEmbedding = async (input: string) => {
    if (!client) getClient()
    const { data } = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input,
        encoding_format: "float",
    });
    return data[0].embedding
}

/**
 * Client for interacting with OpenAI services.
 * Currently provides embedding generation functionality.
 */
export const openAiClient = {
    createEmbedding
}
