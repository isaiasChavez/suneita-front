import { Typography } from "antd";
import styled, { css } from 'styled-components'
import { color } from '../utils/Constants'

interface FooterProps {
 
}
 
const Footer: React.FC<FooterProps> = () => {
   const { Text } = Typography

 return (  <>
 <FooterWrapper>
        <Text>© 2021 Suneita</Text>
        <a href="/">Privacidad</a>
        <a href="/">Términos</a>
      </FooterWrapper></>);
}
 
const FooterWrapper = styled.main`
  padding: 0 8%;
  display: flex;
  align-items: center;
  height: 5rem;
  background-color: ${color.white_two};
  & > * {
    margin-right: 0.5rem;
  }
`

export default Footer;