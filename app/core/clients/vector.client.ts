import { VectorClient, type VectorClientResponse } from "sst";

let client: VectorClientResponse | undefined

const getClient = () => {
    client = VectorClient("VectorDB")
}

const put = async (vector: number[], metadata: Record<string, string | number | boolean | object>) => {
    if (!client) getClient()
    await client!.put({ vector, metadata })
}

// TODO: paginate?
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

export const vectorClient = {
    put,
    query,
}