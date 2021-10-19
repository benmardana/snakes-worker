# Snakes Game High Score Worker

A cloudflare worker to track game scores

## Requirements
- node
- npm
- cloudflare wrangler

## Installation
```
npm install
```

## Usage
The worker accepts GET/POST/HEAD requests at the root path `/`. 

### GET

Returns a JSON object where keys are names and values are scores. E.g.
```
{"AAA":100,"APL":300}
```

### POST

Expects a multipart form payload with the fields `name` and `score`.

Returns a JSON object where keys are names and values are scores. E.g.
```
{"AAA":100,"APL":300}
```

## Development
```
wrangler dev
```

## Deploy
```
wrangler publish
```
