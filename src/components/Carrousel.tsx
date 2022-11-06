import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

interface Props {
  images: string[];
  shouldContain?: boolean;
}

const Carrousel: React.FC<Props> = ({images, shouldContain}) => {
  
  
  return (
  <>
    <Slide 
    duration={15000}
    indicators
    autoplay={true}>
    {
      images.map(image => (
      <div className="each-slide-effect">
        <div
          style={{
            backgroundSize: shouldContain ? 'contain' : 'cover',
            backgroundImage: `url(${image.toString()})`
          }}
        >
        </div>
      </div>
      ))
    }  
  </Slide>
  </>
  )
}

export default Carrousel