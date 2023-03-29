FROM node

WORKDIR /usr/app

COPY package.json .
RUN npm install --production

COPY public/ public/
COPY build/ build/

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
