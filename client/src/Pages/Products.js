import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button,Image  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Products = ({addToCart}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setProduct(res.data.products);
    });
  }, []);

  return (
    <div className="container my-5">
   <h1 className="text-center my-5" style={{ color: 'blue', fontSize: '36px', fontWeight: 'bold' }}>
      All Products List
    </h1>
      <div className="row">
      <Container>
      <Row>
        {product.map(item => (
          <Col key={item.id} md={3}>
            <Card style={{ marginBottom: '20px' }}>
            <Image src={item.images[0]} alt=""          style={{ width: '100%', height: '200px' }}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: ₹ {item.price}</Card.Text>
                <Button
                 onClick={() =>addToCart(item)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      </div>
    </div>
  );
};

export default Products;
