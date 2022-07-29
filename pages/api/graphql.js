// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createServer } from '@graphql-yoga/node'
import { fetch } from "cross-undici-fetch"

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

export default createServer({
    schema: {
        typeDefs: `type Query { foo: String }`,
        resolvers: { Query: {foo: async () => {
            return await fetch("https://animechan.vercel.app/api/random").then(res => res.json())
        } }}
    }
})