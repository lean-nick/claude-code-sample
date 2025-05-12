import { beforeEach, describe, expect, it, vi, type Mock } from "vitest"
import { xyzService } from '~/core/services/xyz.service'
import { main } from "../main"

vi.mock('~/core/services/xyz.service.ts', () => ({
    xyzService: {
        searchForXYZ: vi.fn()
    }
}))

describe('Sample Router', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })

    it('Should use the input search to look for similar XYZ then return the results', async () => {
        const mockSearchForXYZ = xyzService.searchForXYZ as Mock
        const search = 'trout'
        mockSearchForXYZ.mockResolvedValue(['golden trout', 'rainbow trout', 'brown trout'])

        const res = await main.request('/sample', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                search
            })
        })

        expect(mockSearchForXYZ).toHaveBeenCalledWith(search)
        expect(mockSearchForXYZ).toHaveBeenCalledTimes(1)
        expect(await res.json()).toEqual({
            results: ['golden trout', 'rainbow trout', 'brown trout'],
        })
    })
})