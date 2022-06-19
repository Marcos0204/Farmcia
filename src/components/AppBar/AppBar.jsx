import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';




import { Div,
  ImageLogo,
  InputSerch,
  IconSearch,
  IconDelete,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks

} from './styled'
import Logo from '../../img/logo.png'



const AppBar = () => {

  const [ Search, SetSearch ] = useState('')

  const [ click, setClick ] = useState(false);


  const haledClick = ()=> setClick(!click)
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


        <MobileIcon 
            onClick={haledClick}
        >
                { click ? <FaTimes/>
                    : 
                    <FaBars/>
                }
        </MobileIcon>
        <NavMenu click={click}  onClick={haledClick}>
          <NavItem>
            <NavLinks to='/'>
                Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/medicamentos'>
                Medicina
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/belleza'>
                Belleza
            </NavLinks>
          </NavItem>
        </NavMenu>
      </Div>
      
      {/*<ContainerNav>
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
          
        </Navigation>*/}
    </>
  )
}

export default AppBar
