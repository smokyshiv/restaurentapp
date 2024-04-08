
/* eslint-disable prettier/prettier */


import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = props => {


  const token = Cookie.get('jwt_token') || 'chNarsppa'

  if (token === null || token === undefined) {
    return null
  }

  return <Route {...props} />
}

export default ProtectedRoute
