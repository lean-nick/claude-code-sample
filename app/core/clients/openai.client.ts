import OpenAI from "openai";

let client: OpenAI | undefined

const getClient = () => {
    client = new OpenAI()
}

const openai = new OpenAI();

const createEmbedding = async (input: string) => {
    if (!client) getClient()
    const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input,
        encoding_format: "float",
    });
    return embedding
}

export const openAiClient = {
    createEmbedding
}
