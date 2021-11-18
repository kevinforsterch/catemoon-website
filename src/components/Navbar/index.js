import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa"
import { Logo, PooCoin, DexTool } from "resources/index"
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
          aria-label="twitter"
        >
          <FaTwitter />
        </a>
        <a
          className="flex"
          href="https://t.me/CateMoonCoin"
          target="_blank"
          rel="noreferrer"
          aria-label="telegram"
        >
          <FaTelegram />
        </a>
        <a
          className="flex"
          href="https://github.com/CoryITpro/catemoon-token-bep20"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <FaGithub />
        </a>
        <a
          className="flex"
          href="https://poocoin.app/tokens/0x1Ffeb0B5df9B876d1C3689eEDbea392F1652cF8A"
          target="_blank"
          rel="noreferrer"
          aria-label="poocoin"
        >
          <PooCoin />
        </a>
        <a
          className="flex"
          href="https://www.dextools.io/app/bsc/pair-explorer/0x28dec62114317565c4856d1c352c3b90aee4e0f9"
          target="_blank"
          rel="noreferrer"
          aria-label="dextool"
        >
          <img src={DexTool} alt="dextool" />
        </a>
      </div>
    </div>
  </div>
)

export default Navbar
