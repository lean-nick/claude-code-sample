import { beforeEach, describe, expect, it, vi } from "vitest"
import { amazingHelper } from "./sample.route"
import { main } from "../main"

describe('Sample Router', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })

    it('should successfully return a message', async () => {
        // assemble
        const mockAmazingHelper = vi.fn(amazingHelper)

        // act
        await main.request(new Request(
            'request', {
            method: 'POST',
            body: JSON.stringify({
                message: 'Hello World'
            })
        }
        ))

        // assert
        expect(mockAmazingHelper).toHaveBeenCalledWith({ message: 'Hello World' })
    })
})