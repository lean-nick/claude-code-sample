import { beforeEach, describe, expect, it, vi, type Mock } from "vitest"
import { xyzService } from "./xyz.service"
import { dynamoClient } from "../clients/dynamo.client"
import { openAiClient } from "../clients/openai.client"
import { vectorClient } from "../clients/vector.client"

vi.mock("../clients/dynamo.client", () => ({
    dynamoClient: {
        getItem: vi.fn(),
        putItem: vi.fn(),
    }
}));
vi.mock('../clients/openai.client', () => ({
    openAiClient: {
        createEmbedding: vi.fn()
    }
}))
vi.mock('../clients/vector.client', () => ({
    vectorClient: {
        query: vi.fn()
    }
}))
const mockDynamoClient = vi.mocked(dynamoClient, true)
const mockOpenAiClient = vi.mocked(openAiClient, true)
const mockVectorClient = vi.mocked(vectorClient, true)

describe('XYZ Service', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })
    const search = 'trout'
    const embedding = [1, 2, 3, 4]

    it('Should check the cache for an embedding of the provided search term before performing a search', async () => {
        await xyzService.searchForXYZ(search)
        expect(mockDynamoClient.getItem as Mock).toHaveBeenCalledWith(search);
    })

    it('Should perform a search and return the results if there was a cache hit for the provided search term', async () => {
        mockDynamoClient.getItem.mockResolvedValue({
            Item: {
                embedding
            }
        })
        // getItem mock embedding
        // expect that to be put into vector client method call.
    })

    it('Should create an embedding of the provided search term and save it to the cache if none exists', async () => {
        // call openAi client embedding method.
        // call dynamo putItem
    })

    it('Should perform a search and return the result even if there was no cache hit', async () => {

    })
})
