import { Avatar, Card, Col, Radio, Row, Space } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainCarousel from '../components/MainCarousel'
import styled from 'styled-components'

import { Images } from '../types/data'
import { useState } from 'react'
import ModalBazar from '../components/modals/ModalBazar'

interface BazarProps {}

const Bazar: React.FC<BazarProps> = () => {


 const [isModalProductVisible, setIsModalProductVisible] = useState<boolean>(true)

 const onClickProduct = ()=>{
setIsModalProductVisible(true)
 }

  return (
    <>
      <Header />
      <ModalBazar visible={isModalProductVisible} setVisible={setIsModalProductVisible}/>
      <MainCarousel
        images={[Images.landing1, Images.landing2, Images.landing3]}
        titles={[
          '¿Buscas un cuarto? No regreses un mes antes a buscar',
          'Ya no te desgastes caminando para encontrar habitación',
          'Encuentra todos los lugares.'
        ]}
      />
      <SelectsContainer>
        <Radio.Group defaultValue='a'>
          <Radio.Button value='a'>General</Radio.Button>
          <Radio.Button value='a'>Electrodomesticos</Radio.Button>
          <Radio.Button value='b'>Muebles</Radio.Button>
          <Radio.Button value='c'>Material</Radio.Button>
        </Radio.Group>
      </SelectsContainer>

      <Container>
        <Row gutter={[40, 20]} className='w-full'>
          <Col span={5}>
            <Card
            onClick={onClickProduct}
              hoverable
              cover={
                <img
                  alt='example'
                  src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                />
              }
            >
              <Meta
                avatar={
                  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                }
                title='Hermosa cabaña Boutique'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              hoverable
              cover={
                <img
                  alt='example'
                  src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                />
              }
            >
              <Meta
                title='Europe Street beat'
                description='www.instagram.com'
              />
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
const Container = styled.main`
  padding: 4% 8%;
`
const SelectsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`

export default Bazar
