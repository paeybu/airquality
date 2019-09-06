import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Cities = ({ match, cities, fetchCities, loading }) => {
  useEffect(() => {
    fetchCities(match.params.state)
    // eslint-disable-next-line
  }, [])
  return (
    <div>
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
        <div>
          <h5>Cities in {match.params.state}</h5>
          <ol>
            {cities.map(city => (
              <li key={city.city}>
                <Link to={`/${match.params.state}/city/${city.city}`}>
                  {city.city}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

export default Cities
