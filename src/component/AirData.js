import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AirData = ({ match, weatherData, fetchWeatherData, loading }) => {
  useEffect(() => {
    fetchWeatherData(match.params.city, match.params.state)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <nav>
        <div
          className="nav-wrapper blue darken-1"
          style={{ paddingLeft: '25px' }}
        >
          <Link to={`/state/${match.params.state}`} className="breadcrumb">
            {' '}
            {match.params.state}
          </Link>
          <Link to={`#`} className="breadcrumb">
            {' '}
            {match.params.city}
          </Link>
        </div>
      </nav>
      {loading ? (
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      ) : (
        weatherData.current !== undefined && (
          <div className="card green lighten-5">
            <div className="card-content">
              <span className="card-title">
                <strong>Weather</strong>
              </span>
              <img
                src={`https://www.airvisual.com/images/${weatherData.current.weather.ic}.png`}
                alt=""
                style={{ width: '50px' }}
              />
              <p>Temparature: {weatherData.current.weather.tp}</p>
              <p>Humidity: {weatherData.current.weather.hu}</p>
              <p>Wind Direction: {weatherData.current.weather.wd}</p>
              <p>Wind Speed (m/s): {weatherData.current.weather.ws}</p>
              <p>Atmospheric Pressure: {weatherData.current.weather.pr}</p>
              <h5>Pollution: </h5>
              <p>AQI US: {weatherData.current.pollution.aqius}</p>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default AirData
