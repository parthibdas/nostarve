import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './booking.css'
import Formm from './form';
function Booking1() {
  return (
    <div className="d-flex-justify-content-around">
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://www.srloveandcare.org/media/k2/items/cache/3a9297ca78720986dccc8a65ce802a33_L.jpg" />
        <Card.Body>
          <Card.Title>PROVIDE FOOD</Card.Title>
          <Card.Text>
            Serve your excess food to the hungry people.Serve your excess food to the hungry people. Your excess food can save a life.<br></br><br></br><br></br><br></br>
            <span style={{ fontWeight: 'bold' }}>Click here to donate your food!</span>
          </Card.Text>
          <div className='click'><Button  variant="primary">Donate Food</Button></div>
        </Card.Body>
      </Card>

      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/02/78/16/03/1000_F_278160345_JCtJn4nHYm2FYxxl6LIiNNjyT7biOVLX.jpg" />
        <Card.Body>
        <Card.Title>PROVIDE FOOD ON DAILY BASIS</Card.Title>
          <Card.Text>
            Serve your excess food on daily basis. <br></br><br></br><br></br>
            <span style={{ fontWeight: 'bold' }}>Click here to donate your food! </span>
          </Card.Text>
          <div className='click'><Button onClick={Formm} variant="primary">Donate Food</Button></div>
        </Card.Body>
      </Card>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://newsonair.com/wp-content/uploads/2023/01/food-security-696x522.jpg" />
        <Card.Body>
        <Card.Title>PROVIDE FOOD ON WEEKLY BASIS</Card.Title>
          <Card.Text>
            Serve you  <br></br><br></br><br></br>
            <span style={{ fontWeight: 'bold' }}>Click here to donate your food!</span>
          </Card.Text>
          <div className='click'><Button  variant="primary">Donate Food</Button></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Booking1;