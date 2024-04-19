const app = require('./server');

describe('Product API', () => {

  // Test Case สำหรับการดูรายการสินค้า
  describe('get', () => {
    it('ควรเรียกดู', () => {
      app.get('/products/:id', (req, res) => {
        const product = products.find(p => p.id === parseInt(req.params.id));
        if (!product) return res.status(404).send('Product not found');
        res.json(product);
      });
    });
  });

  // Test Case สำหรับการเพิ่มสินค้า
  describe('post', () => {
    it('ควรเพิ่ม', () => {
      app.post('/products', (req, res) => {
        const newProduct =
        {
          id: products.length + 1,
          name: req.body.name,
          category: req.body.category,
          price: req.body.price,
          stock: req.body.stock
        }
        products.push(newProduct);
        res.json(newProduct);
      });
    });
  });


  // Test Case สำหรับการแก้ไขสินค้า
  describe('put', () => {
    it('ควรแก้ไข', () => {
      app.put('/products/:id', (req, res) => {
        const product = products.find(p => p.id === parseInt(req.params.id));
        if (!product) return res.status(404).send('Product not found');

        product.name = req.body.name;
        product.category = req.body.category;
        product.price = req.body.price;
        product.stock = req.body.stock;

        res.json(product);
      });
    });
  });

  // Test Case สำหรับการลบสินค้า
  describe('delete', () => {
    it('ควรลบออก', () => {
      app.delete('/products/:id', (req, res) => {
        const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
        if (productIndex === -1) return res.status(404).send('Product not found');

        const deletedProduct = products.splice(productIndex, 1);
        res.json(deletedProduct);
      });
    });
  });
});
