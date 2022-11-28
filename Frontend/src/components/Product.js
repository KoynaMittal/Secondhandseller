import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const Product = ({ product }) => {
  return (
    <>
      <MDBCard className='h-100'>
        <Link to={`/product/${product._id}`}>
          <MDBCardImage
            src={product.images[0].image1}
            alt='...'
            position='top'
          />
        </Link>
        <MDBCardBody>
          <Link to={`/product/${product._id}`}>
            <MDBCardTitle> <strong>{product.name}</strong></MDBCardTitle>
          </Link>
          <MDBCardText>
            Rs {product.Cost.price}
            </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

export default Product
