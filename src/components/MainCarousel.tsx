import { Carousel, Typography } from 'antd'
import { ImageObject } from '../types/data'
import { Images } from '../types/data'

interface MainCarouselProps {
  images: ImageObject[],
  titles:string[]
}

const MainCarousel: React.FC<MainCarouselProps> = ({ images,titles }) => {
  const { Title, Paragraph, Text } = Typography


  function onChange (a: any) {
    console.log(a)
  }

  if (titles.length ===0)  images.forEach(_=>titles.push("some"))
  
  return (
    <Carousel
      autoplay
      effect='fade'
      style={styles.carrousel}
      afterChange={onChange}
    >
      {images.map((image,i) => (
        <CarrouselImage
          title={titles[i]}
          source={image.url}
        />
      ))}
    </Carousel>
  )
}
const CarrouselImage = ({
  source,
  title
}: {
  source: string
  title: string
}) => {
  const { Title, Paragraph, Text } = Typography

  return (
    <div>
      <div className='w-full flex relative' style={styles.carrousel}>
        <img className='w-full h-full object-cover opacity-90' src={source} />
        <Title className=' absolute center-absolute text-white'>{title}</Title>
      </div>
    </div>
  )
}

const styles = {
  carrousel: {
    maxHeight: '90vh',
    minHeight: '90vh',
    height: '90vh',
    width: '100%'
  }
}

export default MainCarousel
