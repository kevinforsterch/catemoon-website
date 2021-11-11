import {
  Stability,
  Marketing,
  Distribution,
  Deflation,
  Organic,
  PlanetOrangeSmall,
  PlanetPink,
  Rocket,
  Meteor,
} from "resources/index"
import "./style.scss"

const Tokenomics = () => (
  <div className="tokenomics flex flex-column">
    <div className="tokenomics-title container flex flex-column">
      Tokenomics
      <Meteor />
    </div>
    <div className="tokenomics-wrapper container flex">
      <div className="tokenomics-item flex flex-column">
        <Stability />
        <span>Stability</span>
        <p>
          2% will be used for auto-LP. This allows for larger trading volumes
          and enhances price stability so everyone can have a better experience
          trading Catemoon tokens on-chain.
        </p>
      </div>
      <div className="tokenomics-item flex flex-column">
        <Marketing />
        <span>Marketing and development</span>
        <p>
          1% will go to the team's Multi-sig Wallet. Funds on this wallet will
          be used for Marketing, Airdrops, Charity, Community grants, and
          growing the Catemoon ecysystem. Actions taken will be shared with the
          community.
        </p>
      </div>
      <div className="tokenomics-item flex flex-column">
        <Distribution />
        <span>Distribution</span>
        <p>
          1% will be auto-distributed to all holders. This incentivizes
          investors to keep their tokens and earn passive profit while the
          community grows.
        </p>
      </div>
      <div className="tokenomics-item flex flex-column">
        <Deflation />
        <span>Deflation</span>
        <p>
          1% will be burned automatically. This decreases the supply of the
          token in circulation, contributing to a steady price increase.
        </p>
      </div>
      <div className="tokenomics-item flex flex-column">
        <Organic />
        <span>Organic growth</span>
        <p>
          1% will be automatically used for BuyBack. This adds more value to the
          liquidity pool and decreases the supply, making it easier to avoid
          large dumps.
        </p>
      </div>
    </div>
    <PlanetOrangeSmall className="small" />
    <PlanetPink className="pink" />
    <Rocket className="rocket" />
  </div>
)

export default Tokenomics
