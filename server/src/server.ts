import express from 'express';
import cors from 'cors';
import app from './app';

app.use(cors());
app.use(express.json());

// Routes
app.post('/parse-search', async (req, res) => {
  const result = await mlService.parseSearchIntent(req.body.query);
  res.json(result);
});

app.post('/analyze-price', async (req, res) => {
  const { productName, currentPrice, retailer } = req.body;
  const result = await mlService.analyzePriceTrend(productName, currentPrice, retailer);
  res.json(result);
});

app.post('/match-products', async (req, res) => {
  const { productA, productB } = req.body;
  const result = await mlService.matchProducts(productA, productB);
  res.json(result);
});

app.post('/predict-price', async (req, res) => {
  const { history } = req.body;
  const result = await mlService.generatePricePrediction(history);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

