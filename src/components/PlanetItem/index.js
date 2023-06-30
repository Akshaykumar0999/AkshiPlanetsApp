// Write your code here
import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails
  return (
    <li className="planets-item">
      <img className="planet-image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default PlanetItem
