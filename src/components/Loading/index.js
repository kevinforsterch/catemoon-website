import { LoadingIcon, Meteor, PlanetOrangeSmall, PlanetPurple } from "resources"
import "./style.scss"

const Loading = () => (
  <div className="loading flex flex-column">
    <Meteor className="loading-meteor" />
    <PlanetOrangeSmall className="loading-planet-orange" />
    <PlanetPurple className="loading-planet-purple" />
    <LoadingIcon className="loading-load" />
    <p>CATEMOON</p>
  </div>
)

export default Loading
