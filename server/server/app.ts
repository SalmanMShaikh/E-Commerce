import express from 'express';
import newRoutes from './routes/route';
import 'reflect-metadata';
import { AppDataSource } from './connection/connection';
import cors from 'cors';
const app = express();
app.use(cors())
// app.use((req, res, next) => {
//     const allowedOrigins = ['http://localhost:4200', 'https://kit.fontawesome.com/8f442bb614.js'];
//     const origin = String(req.headers.origin);
//     if (allowedOrigins.includes(origin)) {
//         res.setHeader('Access-Control-Allow-Origin', origin)

//     }
//     next();
// });


app.use(express.json());

app.use('/', newRoutes);

const port = 3003

AppDataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log('server started on port', port)
    });
}).catch((err) => {

})