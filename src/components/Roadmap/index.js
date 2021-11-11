import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import "./style.scss"

const Roadmap = () => (
  <div className="roadmap flex flex-column">
    <div className="roadmap-title container flex flex-column">
      <span>Roadmap</span>
    </div>
    <div className="roadmap-subtitle container flex">
      <FaQuoteLeft />
      <span>
        Here we enlisted the events that we've already made plans for, however,
        there are many more ideas and partnerships that we hope will become
        reality later on in our journey, once they are confirmed we will update
        the roadmap.
      </span>
      <FaQuoteRight />
    </div>
    <div className="roadmap-wrapper container">
      <div className="roadmap-item flex flex-column">
        <div className="flex">
          <div className="flex flex-column">
            <span>Phase 1</span>
            <p>Catemoon Launch</p>
            <p>LP + Supply Lock</p>
            <p>Twitter Automated Rewards for the community</p>
          </div>
        </div>
      </div>
      <div className="roadmap-item flex flex-column">
        <div className="flex">
          <div className="flex flex-column">
            <span>Phase 2</span>
            <p>Staking for Catemoon Holders</p>
            <p>Community Grants</p>
          </div>
        </div>
      </div>
      <div className="roadmap-item flex flex-column">
        <div className="flex">
          <div className="flex flex-column">
            <span>Phase 3</span>
            <p>CEX Listings</p>
            <p>Bridge to Solana and potentially other Blockchains</p>
          </div>
        </div>
      </div>
      <div className="roadmap-item flex flex-column">
        <div className="flex">
          <div className="flex flex-column">
            <span>Phase 4</span>
            <p>Formation of CateDAO</p>
            <p>Cate NFT's - Airdrop to OG holders</p>
            <p>Increase LP and lock</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Roadmap
