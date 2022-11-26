import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const AboutUsScreen = () => {
  return (
    <div className='aboutbody' margin="10px">
      <Row md={3} padding="10px">
        <Col md={2}></Col>
        <Col md={8} className='aboutpage'>
          <h1>Who are We?</h1>
          <p>
            This website has been created for the purpose of aiding students for buying and selling the notes
            and other items that they no longer need which might be useful for
            other new students. What we do is just
            aid in establishing the communication between buyer and seller.
            These can include: notes, drawing instruments, utensils & furniture
            specially by students who are on the verge of leaving campus sooner
            or later.
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={8} className='aboutpage1'>
          <h1>Designed and developed by -</h1>
          <p>
            Palak Goel{' '}<br />
            Manasvi Agrawal{'\n'}<br />
            Mili Singh{' '}<br />
            Mohit Aswani{' '}<br />
            Koyna Mittal{' '}<br />
          </p>
          <h3>Contact Details</h3>
          <i className='fas fa-phone'></i> 9560381925
          <i className='fas fa-envelope-square'></i>{' '}
          <a target='_blank' href={`mailto:palakakhilg@gmail.com`}>
          palakakhilg@gmail.com
          </a>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default AboutUsScreen
