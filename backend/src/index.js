const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const fs = require('fs');
const cors = require('cors');

app.use(cors({
    allowedOrigins: [
        'http://localhost:4200/*',
        'https://example.cypress.io/*'
    ]
}));

const routersPath = path.join(__dirname, 'routes');

fs.readdirSync(routersPath).forEach((file) => {
    if (file.endsWith('.js')) {
        const routerModule = require(path.join(routersPath, file));
        const router = routerModule.router;
        app.use(router);
    }
});

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});