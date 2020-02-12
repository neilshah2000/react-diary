import path from 'path';
import express from 'express';
import { MongoClient } from 'mongodb';
import template from './../template';
//comment out before building for production
import devBundle from './devBundle';
import config from './../config/config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import journalRoutes from './routes/journal.routes';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use('/api', journalRoutes);

//comment out before building for production
devBundle.compile(app);

const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req, res) => {
    res.status(200).send(template());
});



let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', port);
});

// Database Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0-pyxgh.mongodb.net/test?retryWrites=true&w=majority';
// Use connect method to connect to the server
// MongoClient.connect(url, (err, db)=>{
//     console.log("Connected successfully to mongodb server");
//     db.close();
// });

mongoose.connect(url);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});
