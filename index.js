const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

const productSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    image: String,
    description: String
});

const Product = mongoose.model('Product', productSchema);

const app = express();
app.use(cors()); // Allow cross-origin requests

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/', async (req, res) => {
    const products = await Product.find({});
    res.render('home', { products });
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/products', async (req, res) => {
    const { title, author, price, image, description } = req.body;
    const product = new Product({ title, author, price, image, description });
    await product.save();
    res.redirect('/');
});

app.get('/products/edit/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('edit', { product });
});

app.post('/products/update/:id', async (req, res) => {
    const { title, author, price, image, description } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { title, author, price, image, description });
    res.redirect('/');
});

// Add this API route for the frontend
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products); // Send products as JSON
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.listen(3010, () => {
    console.log('Server running on port 3010');
});
