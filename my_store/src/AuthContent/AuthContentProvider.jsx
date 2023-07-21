import React from 'react'
import { createContext,useState } from 'react'


const AuthContext = createContext();

const AuthContentProvider = ({children}) => {

const [isAuthe, setisAuth] = useState(false);

  return (
    <div>AuthContentProvider</div>
  )
}

export {AuthContentProvider}