import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'
import { xyzService } from '~/core/services/xyz.service'

const sample = new Hono()

sample.post('/', zValidator(
    'json',
    z.object({
        search: z.string(),
    })),
    async (c) => {
        const { search } = c.req.valid('json')
        const results = await xyzService.searchForXYZ(search)
        return c.json({
            results
        })
    }
)

export { sample }