import {  Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import styled from 'styled-components'
import { UserOutlined, HomeOutlined } from '@ant-design/icons'
import { color } from '../utils/Constants'
import { Images } from '../types/data'
import Meta from 'antd/lib/card/Meta'
import Header from '../components/Header'
import MainCarousel from '../components/MainCarousel'
import Footer from '../components/Footer'



interface DashboardProps {
 
}
 


const Dashboard:React.FC<DashboardProps> = () => {
  const { Title } = Typography


  
  return (
    <>
      <div className='min-h-screen'>
       <Header/>
        <Content>
          <MainCarousel images={[Images.landing1,Images.landing2,Images.landing3]}
            titles={['¿Buscas un cuarto? No regreses un mes antes a buscar','Ya no te desgastes caminando para encontrar habitación','Encuentra todos los lugares.']}
          />
          <Container>
            <Infos>
              <CardService>
                <UserOutlined style={{ fontSize: '2rem' }} />
                <h3>Publica tu alojamiento para que todos lo vean</h3>
              </CardService>
              <CardService>
                <HomeOutlined style={{ fontSize: '2rem' }} />
                <h3>Consigue un mejor lugar para vivir tus años de carrera</h3>
              </CardService>
            </Infos>
            <Cards>
              <ButtonService href="/bazar">
                <div>
                  <img src={Images.team.static?.src} alt={Images.team.alt} />
                </div>
                <h3>
                  Publica los objetos que ya no usas, ya sea porque terminaste
                  tus años de estudio o porque crees ya no necesitarlos.
                </h3>
              </ButtonService>
              <ButtonService>
                <div>
                  <img
                    src={Images.shopping.static?.src}
                    alt={Images.team.alt}
                  />
                </div>
                <h3>
                  Publica los objetos que ya no usas, ya sea porque terminaste
                  tus años de estudio o porque crees ya no necesitarlos.
                </h3>
              </ButtonService>
            </Cards>
            <Landing1>
              <div className='title'>
                <div>
                  <Title className='text-white'>
                    Vende aquello que <br /> no utilizas
                  </Title>
                  <Title className='text-white' level={4}>
                    Vende aquello que no utilizas
                  </Title>
                </div>
              </div>
            </Landing1>
            {/*             <LatestPosts></LatestPosts>
             */}{' '}
          </Container>
        </Content>
      </div>
      <Footer/>
    </>
  )
}

const Infos = styled.div`
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 40vh;
  justify-content: center;
  align-items: center;
`
const Cards = styled.div`
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 50vh;
  justify-content: space-around;
  align-items: center;
`
const Landing1 = styled(Cards)`
  height: 50vh;
  margin: 6rem 0;
  background-image: url(${Images.oaxaca2.static?.src});
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: color-burn;
  background-position: center center;
  background-size: cover;
  border-radius: 8pt;
  justify-content: flex-start;
  & > .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 30rem;
    height: 100%;
  }
`
const LatestPosts = styled(Cards)`
  min-height: 50vh;
`

const ButtonService = styled.a`
  box-shadow: -1px 9px 40px -26px rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
  cursor: pointer;
  min-width: 30rem;
  width: 30rem;
  min-height: 20rem;
  flex-direction: column;
  height: 30rem;
  & > div {
    height: 70%;
    display: flex;
    justify-content: center;
  }
  & > h3 {
    padding: 0 4rem;
    text-align: center;
  }
`

const CardService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 20rem;
  width: 20rem;
  min-height: 20rem;
  margin: 0 2rem;
  height: 20rem;
  & > h3 {
    margin-top: 1.5rem;
    text-align: center;
  }
  &::first-child {
    font-size: 2rem;
  }
`
export const Container = styled.main`
  padding: 0 8%;
`



export default Dashboard;