import { CateHero, PlanetBlue } from "resources/index"
import { catemoonAddress, wBNBAddress } from "constants/index"
import "./style.scss"

const Hero = ({ holders, price, marketcap = 0 }) => (
  <div className="hero flex flex-column">
    <div className="hero-wrapper container">
      <div className="hero-title flex flex-column">
        <h1>
          CATEMOON STARTS A NEW GENERATION OF <span>DEFI MEME</span> COINS
        </h1>
        <a
          className="flex"
          href={`https://pancakeswap.finance/swap?inputCurrency=${wBNBAddress}&outputCurrency=${catemoonAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          Pancakeswap
        </a>
      </div>
      <div className="hero-image flex">
        <CateHero />
      </div>
    </div>
    <div className="hero-ticker container">
      <div className="hero-ticker-item flex flex-column">
        <div>{holders}</div>
        <span>Holders</span>
      </div>
      <div className="hero-ticker-item flex flex-column">
        <div>{price}</div>
        <span>
          Price <span>(USD)</span>
        </span>
      </div>
      <div className="hero-ticker-item flex flex-column">
        <div>100,000,000,000</div>
        <span>Supply</span>
      </div>
      <div className="hero-ticker-item flex flex-column">
        <div>{marketcap}</div>
        <span>
          FDMC <span>(USD)</span>
        </span>
      </div>
    </div>
    <PlanetBlue />
  </div>
)

export default Hero
