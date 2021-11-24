import "./style.scss"

const Verify = ({ walletAddress, onConnectWalletHandler, verifyCode }) => (
  <div className="verify flex">
    <div className="verify-wrapper container flex">
      <div className="verify-main flex flex-column">
        <div className="verify-main-wallet flex">
          <button onClick={onConnectWalletHandler}>
            {walletAddress === ""
              ? "Connect Wallet"
              : walletAddress.slice(0, 6) + " ... " + walletAddress.slice(38)}
          </button>
        </div>
        <div className="verify-main-contents flex flex-column">
          <span>Tweet the following text:</span>
          <input
            type="text"
            value={`#Catemoon Verification [${verifyCode}]`}
            readOnly
          />
        </div>
        <div className="verify-main-verify flex flex-column">
          <span>Paste the link to the tweet you just posted here:</span>
          <input type="text" placeholder="https://twitter.com/abced" />
        </div>
        <button>Confirm</button>
      </div>
    </div>
  </div>
)

export default Verify
