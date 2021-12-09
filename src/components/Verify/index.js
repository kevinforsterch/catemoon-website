import "./style.scss"

const Verify = ({
  walletAddress,
  onConnectWalletHandler,
  onChangeHandler,
  onSubmitVerify,
  response,
  verifyCode,
}) => (
  <div className="verify flex">
    <div className="verify-wrapper container flex">
      <div className="verify-main flex flex-column">
        <p>Claim your reward</p>
        <div className="verify-main-wallet flex">
          <button onClick={onConnectWalletHandler}>
            {walletAddress === ""
              ? "Connect Wallet"
              : walletAddress.slice(0, 6) + " ... " + walletAddress.slice(38)}
          </button>
        </div>
        <div className="verify-main-contents flex flex-column">
          <span>Add your twitter screen name here:</span>
          {/* <input
            type="text"
            value={`#Catemoon Verification [${verifyCode}]`}
            readOnly
          /> */}
          <input
            name="twitter_handler"
            type="text"
            onChange={onChangeHandler}
          />
          <p
            className={
              response.message === ""
                ? "hidden"
                : response.status
                ? "normal"
                : "error"
            }
          >
            {response.message}
          </p>
        </div>
        <button onClick={onSubmitVerify}>Confirm</button>
      </div>
    </div>
  </div>
)

export default Verify
