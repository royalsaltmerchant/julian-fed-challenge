import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap'
import Cards from './components/cards.js'

function App() {
  return (
    <Container fluid="md" className="container-content m-4 p-5">
      <Row className="m-2 align-items-center">
        <Cards 
          img="lake-inniscarra-thumb.jpg"
          smallImg="lake-inniscarra-trainer.jpg"
          title="Lake Inniscarra, Ireland—Pyramid"
          details={true}
          time="30:53"
          distance="6,248 M"
        />
        <Cards 
          img="performance-series-thumb.jpg"
          smallImg="performance-series-trainer.jpg"
          title="Performance Series"
          workouts={9}
        />
        <Cards 
          img="slow-pulls-thumb.jpg"
          smallImg="slow-pulls-trainer.jpg"
          title="Slow Pulls and Fast Intervals"
          time="44:13"
          distance="9,948 M"
        />
        <Cards 
          img="20-minutes-to-toned-thumb.jpg"
          smallImg="20-minutes-to-toned-trainer.jpg"
          title="20 Minutes to Toned"
          workouts={12}
        />
        <Cards 
          img="charles-race-thumb.jpg"
          smallImg="charles-race-trainer.jpg"
          title="Charles Race, Boston, Massachussets"
          time="36:22"
          distance="8,648 M"
        />
        <Cards 
          img="full-body-hiit-thumb.jpg"
          smallImg="full-body-hiit-trainer.jpg"
          title="Full Body Hiit Series"
          workouts={12}
        />
        <Cards 
          img="kafue-river-thumb.jpg"
          smallImg="kafue-river-trainer.jpg"
          title="Kafue River, Zambia—Power Stroke Pyramid"
          time="22:22"
          distance="4,660 M"
        />
        <Cards 
          img="shred-and-burn-thumb.jpg"
          smallImg="shred-and-burn-trainer.jpg"
          title={`Shred \& Burn Series`}
          workouts={16}
        />
      </Row>
    </Container>  
  );
}

export default App;
