import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.listen(3001, () => {
  console.log('🚀 Server started on http://localhost:3001');
});
