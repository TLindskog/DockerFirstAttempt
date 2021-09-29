
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<html>
        <head>
        <title> My first Docker Attempt</title>
        </head>
        <body>
            <main>
            <section>
                <h1>Hej inifrån en Docker Container!</h1>
                <h1>Detta är ballt!</h2>
            </section>
            </main>
        </body>
        </html>`);
});

app.listen(3000);