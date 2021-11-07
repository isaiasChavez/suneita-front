import { Typography } from 'antd';
import styled from 'styled-components'
import { color } from '../utils/Constants'
import {
  Link
} from "react-router-dom";

interface HeaderProps {
 
}
 
const Header: React.FC<HeaderProps> = () => {
  const {  Text } = Typography
 return (  
  <HeaderLanding className=' fixed  top-0 z-10 left-0 right-0 '>
          <Text  style={{flex:0.9, fontSize: '1.5rem' }}>
              <Link   to="/">
                <span className="text-black">
            Suneita
                </span>
              </Link>
            </Text>
          <MenuHeader>
              <MenuItem>
              <Link  to="/">Renta un cuarto</Link>
              </MenuItem>
              <MenuItem>
              <Link  to="/bazar">Bazar</Link>
              
              </MenuItem>
              <MenuItem>
              <Link  to="/login">Ingresar</Link>
                
              </MenuItem>
          </MenuHeader>
        </HeaderLanding>
 );
}
 

const HeaderLanding = styled.main`
  padding: 0 8%;
  display: flex;
  align-items: center;
  background: ${color.white};
  & > * {
    margin-right: 0.5rem;
  }
`
const MenuHeader = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

`
const MenuItem = styled.span`
list-style: none;
padding:  1rem;
margin:0 1rem 0 0;
cursor: pointer;
:hover {
  opacity: 0.5;
}
&>a{
  color: black !important;
}
`

export default Header;