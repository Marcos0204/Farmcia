import React from 'react'
import { FcSearch } from "react-icons/fc";


import { Div, ImageLogo, InputSerch, IconSearch} from './styled'
import Logo from '../../img/logo.png'


const AppBar = () => {
  return (
    <Div>
      <ImageLogo src={Logo} atl='logo' />

      <InputSerch>
        <input 
          type='text'
          placeholder='Buscar...'
        />
        <IconSearch />
      </InputSerch>


      <ImageLogo src={Logo} atl='logo' />
    </Div>
  )
}

export default AppBar
