FROM node:18-alpine

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY server.js .

USER app

EXPOSE 4000

CMD ["node", "server.js"]