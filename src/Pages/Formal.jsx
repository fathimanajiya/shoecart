import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { Formal } from '../data/Formal'

export default function Formal1() {
  return (
    <div>
          <div style={{ width: '100%', padding: '20px' }}>
        <div style={{
          background: 'rgb(92,83,244)',
          background: ' linear-gradient(270deg, rgba(92,83,244,1) 0%, rgba(156,219,219,0.9893207282913166) 50%, rgba(124,235,125,1) 100%)', marginTop: '6px', padding: '2px'
        }}>
          <div style={{ marginLeft: '22px', padding: '20px' }}>
            {/* <div style={{ width: '100%', height: '600px', background: 'grey' }}> */}
            {/* <div style={{ width: '100%', height: '500px', background: 'red',marginTop:'30px' }} > */}
            {/* <div className='' style={{ width: '100%', height: '500px',background:'black',marginTop:'50px'  }}> */}
            <Row>




              {

                Formal.map(function (data) // used for creating loop.each object content will reach parameter data.
                {
                  return (

                    <Col>

                      <Card style={{ width: '23rem', border: '2px solid', height: '33rem', }}>
                        <Card.Img style={{ height: '330px' }} variant="top"  src={data.image} className='card-image ' />
                        <Card.Body>
                          <Card.Title className='text-center' ><b>{data.name}</b></Card.Title>
                          <Card.Text >{data.description}
                          </Card.Text>
                          <Card.Text ><b>Rs.{data.price}</b>
                          </Card.Text>
                          <Card.Text > size {data.size}
                          </Card.Text>
                        </Card.Body>
                      </Card>

                    </Col>


                  )
                }
                )
              }

            </Row>
          </div>
        </div>
      </div>

    </div>
  )
}
