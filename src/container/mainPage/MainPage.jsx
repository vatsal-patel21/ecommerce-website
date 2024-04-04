import React, { useEffect, useState, useContext } from 'react';
import { Card, Carousel, Pagination, Button } from 'antd';
import axios from 'axios';


export default function MainPage() {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  useEffect(() => {
      axios.get('https://dummyjson.com/products')
          .then(res => {
              setProducts(res.data.products);
              console.log(res.data.products);
          })
          .catch(err => {
              console.error(err);
          });
  }, []);
  useEffect(() => {
      if (searchTerm) {
          axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
              .then(res => {
                   // Filter products by name or category
                  // const filteredProducts = res.data.products.filter(product =>
                  // product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  // product.category.toLowerCase().includes(searchTerm.toLowerCase())
                  // );
                  // setProducts(filteredProducts);
                  setProducts(res.data.products);
              })
              .catch(err => {
                  console.error(err);
              });
      } else {
          axios.get('https://dummyjson.com/products')
              .then(res => {
                  setProducts(res.data.products);
              })
              .catch(err => {
                  console.error(err);
              });
      }
  }, [searchTerm]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="product-list">
            {currentProducts.map(product => (
                <Card
                    key={product.id}
                    hoverable
                    style={{ width: 240}}
                >
                    <Carousel style={{ height: '200px', overflow: 'hidden' }}>
                        {product.images.map((image, index) => (
                            <div key={index}>
                                <img alt={product.name} src={image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </Carousel>
                    <Card.Meta title={product.title} description={product.description} />
                    <Button onClick={() => addToCart(product.id)}>
                        Add to Cart ()
                    </Button>
                </Card>
            ))}
            <Pagination
                current={currentPage}
                total={products.length}
                pageSize={productsPerPage}
                onChange={paginate}
            />
        </div>
  )
}
