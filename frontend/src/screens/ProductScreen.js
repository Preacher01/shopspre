import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ( { match } ) => {
    const product = products.find((p) => p._id === Number(match.params._id));
    
    return(
    <div>{product.name}</div>

    );     
};

export default ProductScreen
