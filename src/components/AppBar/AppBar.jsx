import { useState } from 'react'



import { Div, ImageLogo, InputSerch, IconSearch, IconDelete} from './styled'
import Logo from '../../img/logo.png'



const AppBar = () => {

  const [ Search, SetSearch ] = useState('')
  return (
    <Div>
      <ImageLogo src={Logo} atl='logo' />

      <InputSerch>
        <input 
          type='text'
          placeholder='Buscar...'
          value= {Search}
          onChange= { e => SetSearch(e.target.value)}

        />
        <IconDelete onClick= {() => SetSearch('')} />
        <IconSearch />
      </InputSerch>


      <ImageLogo src={Logo} atl='logo' />
    </Div>
  )
}

export default AppBar
