const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, "../data/products.json");

const productController = {
    getAllProducts: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render('productList', {products});
    },

    getAddProductPage: (req, res) =>{
        res.render('addProduct');
    },

    addProductToList: (req, res) => {
        const {name, price} = req.body;
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const newProduct = {id : products.length + 1, name, price};
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
    },
    
    getProductDetails: (req, res) => {
        const productId = req.params.id;
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const product = products.find((p) => p.id === parseInt(productId));
        res.render('productDetails', {product})
    }
}


module.exports = productController;