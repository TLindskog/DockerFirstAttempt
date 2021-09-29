#Vilken bas image ska användas.
FROM node 

#Sätta upp applikationens katalogen i vår container
WORKDIR /app

#Kopiera ifrån och till
COPY . /app

#Installera det som står i package.json filen.
RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]

