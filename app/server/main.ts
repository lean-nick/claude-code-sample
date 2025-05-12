import { Hono } from 'hono'
import { sample } from './routes'

const main = new Hono()

main.route('/sample', sample)

export { main }