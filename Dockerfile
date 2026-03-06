FROM node:20.20.0 AS builder
LABEL maintainer samirpanjiyar4@gmail.com
WORKDIR /reactapp
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine 
COPY --from=builder /reactapp/dist/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
