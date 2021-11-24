import { Link } from "react-router-dom"
import { AppRoutes } from "constants/index"
import "./style.scss"

const NotFound = () => (
  <div className="not-found flex">
    <div className="not-found-wrapper container flex flex-column">
      <div>Not Found</div>
      <Link to={AppRoutes.Home}>Go back to home</Link>
    </div>
  </div>
)

export default NotFound
