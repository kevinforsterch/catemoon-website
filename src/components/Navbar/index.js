import { FaTelegram, FaTwitter } from "react-icons/fa"
import { Logo, PooCoin } from "resources/index"
import "./style.scss"

const Navbar = () => (
  <div className="navbar flex">
    <div className="navbar-wrapper container flex">
      <div className="navbar-logo flex">
        <img src={Logo} alt="" />
        <span>CATEMOON</span>
      </div>
      <div className="navbar-socials flex">
        <a
          className="flex"
          href="https://twitter.com/CateMoon"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          className="flex"
          href="https://t.me/CateMoonCoin"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          className="flex"
          href="https://poocoin.app/tokens/0x1Ffeb0B5df9B876d1C3689eEDbea392F1652cF8A"
          target="_blank"
          rel="noreferrer"
        >
          <PooCoin />
        </a>
      </div>
    </div>
  </div>
)

export default Navbar
