import { Image, Modal } from 'antd'
import styled from 'styled-components'
import { Images } from '../../types/data'

interface ModalBazarProps {
  visible: boolean
  setVisible(isVisible:boolean): any;
}

const ModalBazar: React.FC<ModalBazarProps> = ({ visible, setVisible }) => {
  return (
    <Modal
      title='Nombre del producto'
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width='98vw'
    >
      <ImagesContainer>
        <ImageContainer>
          <Image style={{height: '100%'}} src={Images.landing1.static?.src} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Images.oaxaca.static?.src} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Images.landing1.static?.src} />
        </ImageContainer>
         <ImageContainer>
          <Image src={Images.landing1.static?.src} />
        </ImageContainer>
      </ImagesContainer>

      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  )
}

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const ImageContainer = styled.div`
 margin:0.4rem;
 border-radius: 0.4rem;
 overflow: hidden;
 background: red;
 min-width:25rem;
 height:90rem;
 max-width:25rem;
 height: auto;

`
export default ModalBazar

