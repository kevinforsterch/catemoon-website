import { Link } from "react-router-dom"
import { AppRoutes } from "constants/index"
import "./style.scss"

const ComingSoon = () => (
  <div className="coming-soon flex">
    <div className="coming-soon-wrapper container flex flex-column">
      <div>Coming Soon</div>
      <Link to={AppRoutes.Home}>Go back to home</Link>
    </div>
  </div>
)

export default ComingSoon
