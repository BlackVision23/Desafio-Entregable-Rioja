class ProductManager {
    constructor() {
      this.products = [];
      this.currentId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son obligatorios');
        return;
      }
  
      // Validar que no se repita el campo "code"
      if (this.products.some((product) => product.code === code)) {
        console.error(`Ya existe un producto con el código "${code}"`);
        return;
      }
  
      // Agregar producto al arreglo de productos
      const newProduct = {
        id: this.currentId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
  
      console.log(`Producto "${title}" agregado correctamente`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
  
      if (!product) {
        console.error('Not found');
        return null;
      }
  
      return product;
    }
  }

const productManager = new ProductManager();

// Agregar un producto
productManager.addProduct('Zapatillas', 'Zapatillas deportivas', 25000, 'ruta/de/imagen/1.jpg', 'P001', 30);
productManager.addProduct('Jogging', 'Joggings para hombre', 10000, 'ruta/de/imagen/2.jpg', 'P002', 50);
productManager.addProduct('Remera', 'Remera mangas largas para hombre', 8000, 'ruta/de/imagen/3.jpg', 'P003', 40);

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log(allProducts);

// Obtener un producto por id
const productById = productManager.getProductById(1);
console.log(productById);