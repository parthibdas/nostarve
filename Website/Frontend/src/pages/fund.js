import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './fund.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

function Fund() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Card className="textcenter" data-aos="zoom-in-up">
      <Card.Body>
        <Card.Title>Join Hands With Us</Card.Title>
        <Card.Text>
          Donate funds to support poor people
        </Card.Text>
        {/* <div className='click' ><Button variant="primary">Donate here</Button></div> */}
       
        <Popup  className='pop' trigger={<button variant="success" className='pi'>Donate here</button>} position="left">
        <div className='po'><form>
            <MDBContainer
              className="py-5"
              fluid
              // style={{
              //   backgroundColor:
              //     "white",
              // }}
            >
              <MDBRow className=" d-flex justify-content-center">
                <MDBCol md="16" lg="10" xl="5">
                  <MDBCard className="rounded-3 p-444">
                    <MDBCardBody className="p-4 " >
                      <div className="text-center mb-4">
                        <h6>Payment</h6>
                      </div>
                      <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                      <div className="d-flex flex-row align-items-center mb-4 pb-1">
                        <img
                          className="img-fluid"
                          src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                        />
                        <div className="flex-fill mx-3">
                          <div className="form-outline">
                            <MDBInput
                              label="Card Number"
                              id="form1"
                              type="text"
                              size="lg"
                              value="**** **** **** 3193"
                            />
                          </div>
                        </div>
                        <a href="#!">Remove card</a>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4 pb-1">
                        <img
                          className="img-fluid"
                          src="https://img.icons8.com/color/48/000000/visa.png"
                        />
                        <div className="flex-fill mx-3">
                          <div className="form-outline">
                            <MDBInput
                              label="Card Number"
                              id="form2"
                              type="text"
                              size="lg"
                              value="**** **** **** 4296"
                            />
                          </div>
                        </div>
                        <a href="#!">Remove card</a>
                      </div>
                      <p className="fw-bold mb-4">Add new card:</p>
                      <MDBInput
                        label="Cardholder's Name"
                        id="form3"
                        type="text"
                        size="lg"
                        value="Anna Doe"
                      />
                      <MDBRow className="my-4">
                        <MDBCol size="7">
                          <MDBInput
                            label="Card Number"
                            id="form4"
                            type="text"
                            size="lg"
                            value="1234 5678 1234 5678"
                          />
                        </MDBCol>
                        <MDBCol size="3">
                          <MDBInput
                            label="Expire"
                            id="form5"
                            type="password"
                            size="lg"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol size="2">
                          <MDBInput
                            label="CVV"
                            id="form6"
                            type="password"
                            size="lg"
                            placeholder="CVV"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBBtn color="success" size="lg" block>
                       Make Payment
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </form>
          </div>
          </Popup>
         
      </Card.Body>
    </Card>
  );
}

export default Fund;