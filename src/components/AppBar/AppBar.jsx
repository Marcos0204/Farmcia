import { useState } from 'react'




import { Div,
  ImageLogo,
  InputSerch,
  IconSearch,
  IconDelete,
  ContainerNav,
  Navigation,
  ButtonLink,

} from './styled'
import Logo from '../../img/logo.png'



const AppBar = () => {

  const [ Search, SetSearch ] = useState('')
  return (
    <>
      <Div>
        <ImageLogo src={Logo} atl='logo' />

        <InputSerch>
          <input 
            type='text'
            placeholder='Buscar...'
            value= {Search}
            onChange= { e => SetSearch(e.target.value)}

          />
          <IconDelete onClick= {() => SetSearch('')} > X</IconDelete>
          <IconSearch />
        </InputSerch>


        <ImageLogo src={Logo} atl='logo' />
      </Div>
      
      <ContainerNav>
        <Navigation>
          <ButtonLink to='/'>
            HOme
          </ButtonLink>
          <ButtonLink to='/medicamentos'>
            medicamentos
          </ButtonLink>
          <ButtonLink to='/belleza'>
            Belleza
          </ButtonLink>
          
        </Navigation>
      </ContainerNav>
    </>
  )
}

export default AppBar
