///////////////////
/* Configuration */
///////////////////
import express from 'express';
const app     = express();
const port    = 3000;

import multer from 'multer';
const upload = multer({ dest: '.public/uploads/' });

/* Middleware */
// import  logRequests from  './middlewares/logRequests.js';

/* Handlers */
import rootHandler from './handlers/rootHandler.js';
import faviconHandler from './handlers/faviconHandler.js';
import fileanalyseHandler from './handlers/fileanalyseHandler.js';

/* Use cors so the project is testable by freeCodeCamp */
import cors from 'cors';

/////////////
/* Routing */
/////////////
import * as url from 'url';
const dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(dirname + '/public'));

app.get('/', rootHandler);
app.get('/favicon.ico', faviconHandler);

app.post('/api/fileanalyse', upload.single('upfile'),/*  logRequests, */ fileanalyseHandler)

//////////////
/* Listener */
//////////////
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});