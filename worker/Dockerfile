FROM node:18-alpine

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY worker.js .

USER app

CMD ["node", "worker.js"]