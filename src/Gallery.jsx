import React, {useState} from 'react'
import {images} from './images'

export default function Gallery() {

  const [dimensions, setDimensions] = useState({})
  const [styles, setStyles] = useState({})

  const onImgLoad = ({target:img}) => {
    // console.log({target:img})
    setDimensions({height:img.offsetHeight, width:img.offsetWidth});

    const style = {
      gridColumnEnd: `span ${getSpanEstimate(dimensions.width)}`,
      gridRowEnd: `span ${getSpanEstimate(dimensions.height)}`,
    }
    setStyles(style)
  }

  const ImageGridItem = (image) => {
    return <img onLoad={onImgLoad} style={styles} className="w-full" src={image.url} alt={image.name} />
  }


  const getSpanEstimate = (size) => {
    if (size > 250) {
      return 2
    }
    return 1
  }


  return (
    <>
      <section id="photos" className="gridContainer md:grid-cols-7">
        {
          images.map(image =>(
            <figure key={image.name}>
              {ImageGridItem(image)}
            </figure>
          ))
        }
      </section>
  </>
  )
}



