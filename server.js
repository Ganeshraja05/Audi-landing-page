const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// API for car models
app.get('/api/models', (req, res) => {
  const models = [
    { name: 'Audi e-tron GT', price: 104900, description: 'Electric performance with 637 hp', image: 'https://public.readdy.ai/ai/img_res/e1202123abec1bd6c9c7fa99e7876c3f.jpg' },
    { name: 'Audi Q8 e-tron', price: 74400, description: 'Luxury electric SUV, 300-mile range', image: 'https://public.readdy.ai/ai/img_res/7a01f2bd62330a4e197ba3d1e27177a3.jpg' },
    { name: 'Audi RS7 Sportback', price: 118500, description: 'Sports sedan with 591 hp', image: 'https://public.readdy.ai/ai/img_res/1667c4a569c79c1006b4973fa94c1c91.jpg' }
  ];
  res.json(models);
});

// API for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, interest, message } = req.body;
  console.log('Contact submission:', { name, email, interest, message });
  res.json({ message: 'Thank you for your submission!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));