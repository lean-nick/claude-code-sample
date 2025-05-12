import { dynamoClient } from "../clients/dynamo.client"
import { openAiClient } from "../clients/openai.client"
import { vectorClient } from "../clients/vector.client"

const searchForXYZ = async (search: string) => {
    let { embedding } = await dynamoClient.getItem(search)
    if (!embedding) {
        embedding = await openAiClient.createEmbedding(search)
        dynamoClient.putItem(embedding)
    }
    const results = await vectorClient.query(embedding)
    return results
}

export const xyzService = {
    searchForXYZ
}