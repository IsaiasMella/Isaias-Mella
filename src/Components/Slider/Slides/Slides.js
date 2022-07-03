import React from 'react'


const SlidesInfo = [
  {
    src: 'https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2398354.jpg&fm=jpg',
    alt: 'Proyect 1',
    desc: 'Proyect 1'
  },
  {
    src: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?cs=srgb&dl=pexels-craig-adderley-2449452.jpg&fm=jpg',
    alt: 'Proyect 2',
    desc: 'Proyect 2'
  },
  {
    src: 'https://images.pexels.com/photos/340103/pexels-photo-340103.jpeg?cs=srgb&dl=pexels-john-tekeridis-340103.jpg&fm=jpg',
    alt: 'Proyect 3',
    desc: 'Proyect 3'
  }
]

const Slides = SlidesInfo.map(slide =>
(
  <div className='Slides__container'>
    <img src={slide.src} alt={slide.alt} />
    <div className='slides__desc'>
      <span>
        {slide.desc}
      </span>
    </div>
  </div>
))

export default Slides