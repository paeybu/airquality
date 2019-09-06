import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const States = ({ states, fetchStates, loading }) => {
  useEffect(() => {
    fetchStates()
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {states.map(state => (
              <tr key={state.state}>
                <td>
                  <Link to={`/state/${state.state}`}>{state.state}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default States
