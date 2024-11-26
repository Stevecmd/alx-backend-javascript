/**
 * Entry point of the server
 * @module server
 * @requires express
 * @requires routes/index
 * @returns {object} Express app
 */
import express from 'express';
import indexRouter from './routes/index';

const app = express();

app.use('/', indexRouter);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
