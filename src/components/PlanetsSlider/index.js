// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="app-container" data-testid="planets">
      <ul className="app-card">
        <h1 className="main-heading">Planets</h1>
        <Slider {...settings} className="slider-card">
          {planetsList.map(each => (
            <PlanetItem key={each.id} itemDetails={each} />
          ))}
        </Slider>
      </ul>
    </div>
  )
}
export default PlanetsSlider
