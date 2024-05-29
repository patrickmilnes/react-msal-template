FROM node:21-bookworm AS builder
WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:apline
COPY --from=builder /app/dist /usr/share/nginx/html/app
