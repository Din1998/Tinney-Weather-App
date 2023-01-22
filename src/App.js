import React,{useState} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from "./components/SearchBar";
import './app.css'
import TempComponent from './components/TempComponent';

import WatchComponent from './components/WatchComponent';
import Footer from './components/Footer';


const api = {
  key: "7f6b2b2901ccfdb82bda76d2ef1024c7",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function App() {



  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  console.log(weather)

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return(
    <div className='main__container'>
      <Container>
        <Row>
          <Col>
            <SearchBar
            setQuery={setQuery}
            query={query}
            search={search}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <WatchComponent />
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12}>
            <TempComponent
            currentDate={dateBuilder(new Date())}
            weather={weather}
            />
          </Col>
         
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
    </div>
  )
}