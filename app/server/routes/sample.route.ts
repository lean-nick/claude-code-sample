import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'

const sample = new Hono()

export const amazingHelper = (message: string) => {
    console.info(message)
}

sample.post('/', zValidator(
    'json',
    z.object({
        message: z.string(),
    })),
    (c) => {
        console.info(`Invoking sampleRouter['/'] with inputs: ${c.req.valid}`)
        const { message } = c.req.valid('json')

        amazingHelper(message)

        return c.json({
            message
        })
    }
)

export { sample }