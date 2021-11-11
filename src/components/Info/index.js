import {
  CateMoon,
  CateBalloon,
  CateBall,
  CateRocket,
  PlanetBig,
  Rocket,
  PlanetPurple,
  Meteor,
  PlanetOrangeSmall,
  NeonBackground,
} from "resources"
import "./style.scss"

const Info = () => (
  <div className="info flex flex-column">
    <Rocket className="info-rocket" />
    <PlanetPurple className="purple" />
    <div className="info-wrapper container flex flex-column">
      <div className="info-item">
        <CateMoon />
        <p>
          People have lots of different feelings and thoughts about doge coins,
          but one thing is for certain - there are way too many of them
          available on the market. Not only do they all fall into the shitcoin
          category, but new ones appear as fast as the US prints dollars.
        </p>
      </div>
      <div className="info-item">
        <div className="flex flex-column">
          <p className="flex flex-column">
            <span>Introducing CateMoon as the unique alternative.</span>
            <span>
              There are a few things to think about with CateMoon that make us
              different.
            </span>
            <span>
              First of all, CateMoon is unique, unlike the latest doge-themed
              coin that was released. Or the one before that. Or the one before
              that... and so on. With doge-themed coins, it's copycat after
              copycat after copycat, all hoping to grab a slice of the pie
              without doing anything different.
            </span>
          </p>
          <p>We're unique, though, as we're not a doge coin.</p>
          <p>We are Catemoon.</p>
        </div>
        <div className="info-item-svg flex">
          <CateBalloon />
        </div>
      </div>
      <div className="info-item">
        <CateBall />
        <PlanetOrangeSmall className="flex top" />
        <NeonBackground className="neon" />
        <div className="flex flex-column">
          <h2>Next Level Marketing</h2>
          <p>
            The final key differentiator between CateMoon and all those doge
            coin impersonators is the next-level marketing strategy that we are
            implementing. The new and innovative techniques that we will be
            using will help CateMoon get the traction it deserves, leaving
            behind all those other meme coins that don't do anything more than
            exist, with some pretty images.
          </p>
          <p>
            We want everyone to hear about CateMoon, as our main focus is on the
            adoption of the coin. So, we're going to invest all the profit that
            CateMoon makes into ads. We'll have ads running on Reddit, YouTube,
            your grandma's favorite cooking channel, and everywhere else we can
            find.
          </p>
        </div>
        <Meteor className="left-one" />
        <Meteor className="left-two" />
        <Meteor className="right" />
      </div>
    </div>
    <div className="info-last flex">
      <div className="info-last-section container">
        <div>
          <div className="flex flex-column">
            <p>
              The best part is we will be giving rewards to everyone who helps
              us promote CateMoon to their communities. All CateMoon users can
              be part of the effort, with benefits for everyone who gets
              involved.
            </p>
            <p>
              What does this mean? It means you will get rewards when you
              follow, like, and retweet the content that we post on social
              media. And the earlier you get involved, the more profitable it
              will be.
            </p>
          </div>
          <CateRocket />
        </div>
      </div>
    </div>
    <PlanetBig className="last" />
  </div>
)

export default Info
