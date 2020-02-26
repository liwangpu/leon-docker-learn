FROM node:8.15.0-alpine
WORKDIR /app
ENV PORT=3000
COPY . .
RUN npm install --production
CMD ["npm","run","server"]