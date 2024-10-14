import productsData from '../public/data/products.json';

function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Fungsi untuk melakukan filtering
  const handleFilter = (price, name) => {
    const filtered = productsData.filter((product) => {
      return (
        (price === undefined || product.price <= price) &&
        (name === '' || product.name.toLowerCase().includes(name.toLowerCase()))
      );
    });
    setFilteredProducts(filtered);
  };

}