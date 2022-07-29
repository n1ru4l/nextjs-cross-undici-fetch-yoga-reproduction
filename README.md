# Reproduction

1. Run `yarn dev`

2. Visit http://localhost:3000/api/graphql?query=%7B%0A++foo%0A%7D

3. Click the play button

4. See the following error in the console:

```
error - uncaughtException: TypeError: Cannot read properties of undefined (reading 'get')
    at Function.value (/private/tmp/nextjs/node_modules/cross-undici-fetch/dist/create-node-ponyfill.js:198:26)
    at new Headers (/private/tmp/nextjs/node_modules/next/dist/compiled/node-fetch/index.js:1:56447)
    at createHeadersLenient (/private/tmp/nextjs/node_modules/next/dist/compiled/node-fetch/index.js:1:59685)
    at ClientRequest.<anonymous> (/private/tmp/nextjs/node_modules/next/dist/compiled/node-fetch/index.js:1:65909)
    at ClientRequest.emit (node:events:527:28)
    at HTTPParser.parserOnIncomingClient [as onIncoming] (node:_http_client:631:27)
    at HTTPParser.parserOnHeadersComplete (node:_http_common:128:17)
    at TLSSocket.socketOnData (node:_http_client:494:22)
    at TLSSocket.emit (node:events:527:28)
    at addChunk (node:internal/streams/readable:315:12)
```