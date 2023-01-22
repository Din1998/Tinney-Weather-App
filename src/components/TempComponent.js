import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind,faCloud,faTemperatureHigh,faTemperatureLow,faWater,faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function TempComponent({currentDate,weather}) {
  return(
    <div className='Temp__wraper'>
      <Row>
        <Col>
        <Card className='Temp__card card'>
          {(typeof weather.main != "undefined") ? (
            <div className='inner__wraper'>
              <div className='location__box'>
                <div><h1>{weather.name},{weather.sys.country}</h1></div>
                <div><h5>{currentDate}</h5></div>
              </div>
              <div className='temp__box'>
                <div><h1 className='temp__text'>{Math.round(weather.main.temp)}°c</h1></div>
                <div><p>{weather.weather[0].main}</p></div>
              </div>
            </div>
          ) : (<div className='before__input'>
                <p>Please Inter Your City !</p>
                <h1>__ °c</h1>
              </div>)}
          </Card>
        </Col>
        <Col>
        <div className='chart__wraper'>
          <Card className='chart__card card'>
          {(typeof weather.main != "undefined") ? (
            <div className='main__'>
              <div className='box__wraper'>
                <div className='box a'>
                  <h5>Humidity</h5>
                  <FontAwesomeIcon icon={faWater} />
                  <p>{Math.round(weather.main.humidity)} %</p>
                </div>
                <div className='box b'>
                  <h5>Pressure</h5>
                  <FontAwesomeIcon icon={faArrowDown} />
                  <p>{Math.round(weather.main.pressure)} </p>
                </div>
                <div className='box c'>
                  <h5>Temp Max</h5>
                  <FontAwesomeIcon icon={faTemperatureHigh} />
                  <p>{Math.round(weather.main.temp_max)} </p>
                </div>
                <div className='box d'>
                  <h5>Temp Min</h5>
                  <FontAwesomeIcon icon={faTemperatureLow} />
                  <p>{Math.round(weather.main.temp_min)} </p>
                </div>
                <div className='box e'>
                  <h5>Wind</h5>
                  <FontAwesomeIcon icon={faWind} />
                  <p>{Math.round(weather.wind.speed)} </p>
                </div>
                <div className='box f'>
                  <h5>Cloudes</h5>
                  <FontAwesomeIcon icon={faCloud} />
                  <p>{Math.round(weather.clouds.all)}</p>
                </div>
              </div>
            </div>
          ) : (<div className='before__input'>
                
                <h1>__ °</h1>
                </div>)}
      </Card>
    </div>
        </Col>
      </Row>
      
    </div>
  )
}


