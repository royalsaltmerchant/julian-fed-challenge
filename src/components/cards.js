import React from 'react';
import '../App.css';
import { Card, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faRuler } from '@fortawesome/free-solid-svg-icons'

export default function Cards(props) {
  const {img, smallImg, title, details, workouts, time, distance} = props

  function renderCard() {
    if(details) {
      return(
        <Card className="m-2 card-style">
          <Card.Img variant="top" src={img} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex flex-row">
              <Card.Title>{title}</Card.Title>
              <img className="small-img" src={smallImg} />
            </div>
            <div className="d-flex flex-row align-items-center">
              <FontAwesomeIcon className="extra-icons" icon={faClock} size="xs"/>
              <small className="extra-icons">{time}</small>
              <FontAwesomeIcon className="extra-icons" icon={faRuler} size="xs"/>
              <p className="extra-icons">{distance}</p>
            </div>
            <Button className="mt-auto" variant="link" size="sm">VIEW DETAILS</Button>
          </Card.Body>
        </Card>
      )
    } else if(workouts) {
      return(
        <Card className="m-2 card-style">
          <div className="img-container">
            <Card.Img variant="top" src={img} />
            <div className="img-workouts">
              <h4>{workouts}</h4>
              <p>WORKOUTS</p>
            </div>
          </div>
          <Card.Body className="d-flex flex-column">
            <div className="d-flex flex-row">
              <Card.Title>{title}</Card.Title>
              <img className="small-img" src={smallImg} />
            </div>
          </Card.Body>
        </Card>
      )
    } else {
      return(
        <Card className="m-2 card-style">
          <Card.Img variant="top" src={img} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex flex-row">
              <Card.Title>{title}</Card.Title>
              <img className="small-img" src={smallImg} />
            </div>
            <div className="d-flex flex-row align-items-center">
              <FontAwesomeIcon className="extra-icons" icon={faClock} size="xs"/>
              <small className="extra-icons">{time}</small>
              <FontAwesomeIcon className="extra-icons" icon={faRuler} size="xs"/>
              <p className="extra-icons">{distance}</p>
            </div>
          </Card.Body>
        </Card>
      )
    }
  }

  return (
    <div>
      {renderCard()}
    </div>
  )
}
