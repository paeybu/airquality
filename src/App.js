import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css'
import States from './component/States'
import Cities from './component/Cities'
import AirData from './component/AirData'
import axios from 'axios'

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const COUNTRY = 'Thailand'
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [weatherData, setWeatherData] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchStates = async () => {
    setLoading(true)
    const res = await axios.get(
      `http://api.airvisual.com/v2/states?country=${COUNTRY}&key=${API_KEY}`
    )
    setStates(res.data.data)
    setLoading(false)
  }

  const fetchCities = async state => {
    setLoading(true)
    const res = await axios.get(
      `http://api.airvisual.com/v2/cities?state=${state}&country=${COUNTRY}&key=${API_KEY}`
    )
    setCities(res.data.data)
    setLoading(false)
  }

  const fetchWeatherData = async (city, state) => {
    setLoading(true)
    const res = await axios.get(
      `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${COUNTRY}&key=${API_KEY}`
    )
    setWeatherData(res.data.data)
    setLoading(false)
  }

  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Link to={'/'}>
              <h1>Weather data in Thailand</h1>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6">
            <Route
              exact
              path="/"
              render={props => (
                <States
                  {...props}
                  states={states}
                  fetchStates={fetchStates}
                  loading={loading}
                />
              )}
            />
            <Route
              exact
              path="/state/:state"
              render={props => (
                <Cities
                  {...props}
                  cities={cities}
                  fetchCities={fetchCities}
                  loading={loading}
                />
              )}
            />
            <Route
              exact
              path="/:state/city/:city"
              render={props => (
                <AirData
                  {...props}
                  weatherData={weatherData}
                  fetchWeatherData={fetchWeatherData}
                  loading={loading}
                />
              )}
            />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
