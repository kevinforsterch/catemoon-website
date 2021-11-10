import { CateHero } from "resources/index"
import "./style.scss"

const Hero = ({ holders = 1, price = 0, marketcap = 0 }) => (
  <div className="hero flex flex-column">
    <div className="hero-wrapper container">
      <div className="hero-title flex flex-column">
        <h1>
          CATEMOON STARTS A NEW GENERATION OF <span>DEFI MEME</span> COINS
        </h1>
        <a className="flex" href="" target="_blank" rel="noreferrer">
          Get Started
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
        <span>Price</span>
      </div>
      <div className="hero-ticker-item flex flex-column">
        <div>100,000,000</div>
        <span>Supply</span>
      </div>
      <div className="hero-ticker-item flex flex-column">
        <div>{marketcap}</div>
        <span>Marketcap</span>
      </div>
    </div>
  </div>
)

export default Hero
