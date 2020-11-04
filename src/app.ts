import express from 'express';

import tasksRoutes from './routes/tasks';

const app = express();
const PORT = 8000;


app.use('/tasks',tasksRoutes);

app.get('/healthCheck', (req, res) => res.send('Server is running'))

app.listen(PORT);

console.log(`Server is running in port ${PORT}`)