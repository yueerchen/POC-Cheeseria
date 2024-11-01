import express from 'express';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(bodyParser.json());

let cheeses = [
  { id: 1, name: 'Cheddar', color: 'Yellow', pricePerKilo: 15, picture: 'https://www.cheese.com/media/img/cheese-thumbs/cheddar_large.jpg' },
  { id: 2, name: 'Brie', color: 'White', pricePerKilo: 20, picture: 'https://www.cheese.com/media/img/cheese-thumbs/-suggestion/Briefermier.jpg' },
  { id: 3, name: 'Gouda', color: 'Yellow', pricePerKilo: 18, picture: 'https://www.cheese.com/media/img/cheese-thumbs/-suggestion/Old_Gouda_-_48_Month.jpg' },
  { id: 4, name: 'Camembert', color: 'White', pricePerKilo: 22, picture: 'https://www.cheese.com/media/img/cheese-thumbs/-suggestion/CamembertStLoup_800x.jpg' },
  { id: 5, name: 'Manchego', color: 'Pale yellow', pricePerKilo: 25, picture: 'https://www.cheese.com/media/img/cheese-suggestion/manchego_1280x800_1.jpg' }
];

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Swagger setup
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/cheeses', (req, res) => {
  res.json(cheeses);
});

app.get('/cheeses/:id', (req, res) => {
  const cheese = cheeses.find((c) => c.id === parseInt(req.params.id));
  if (!cheese) return res.status(404).send('Cheese not found');
  res.json(cheese);
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));

export default app;
