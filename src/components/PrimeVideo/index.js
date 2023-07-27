// Write your code here
import Slider from 'react-slick'
import MovieSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const actionList = moviesList.filter(i => i.categoryId === 'ACTION')
  const comedyList = moviesList.filter(i => i.categoryId !== 'ACTION')

  return (
    <div>
      <img
        className="head"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />

      <div className="slider-container">
        <h1 className="head">Action Movies</h1>
        <Slider {...settings}>
          {actionList.map(i => (
            <div>
              <MovieSlider key={i.id} itemDetails={i} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-container">
        <h1 className="head">Comedy Movies</h1>
        <Slider {...settings}>
          {comedyList.map(i => (
            <div>
              <MovieSlider key={i.id} itemDetails={i} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
