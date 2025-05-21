import express from "express";

import universidadeRoutes from './routes/UniversidadeRoutes';

const app = express();
app.use(express.json());
app.use('/universidades', universidadeRoutes);

export default app;
