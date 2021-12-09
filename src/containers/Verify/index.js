import { useState, useEffect } from "react"
import axios from "axios"
import { connectWallet, addBSCMainnet } from "helpers/wallet"
import VerifyComponent from "components/Verify"

const Verify = () => {
  const [walletAddress, setWalletAddress] = useState("")
  const [twitterHandler, setTwitterHandler] = useState("")
  const [response, setResponse] = useState({ status: false, message: "" })
  const [verifyCode, setVerifyCode] = useState("")

  useEffect(() => {
    if (window.ethereum) {
      onChangeWalletListener()
      onGenerateVerifyCode()
    }
  }, [])

  const onConnectWalletHandler = async () => {
    const walletResponse = await connectWallet()

    setWalletAddress(walletResponse.address)

    if (walletResponse.status === "Adding") {
      await addBSCMainnet()
    }
  }

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0])
        } else {
          setWalletAddress("")
        }
      })
    }
  }

  const onChangeHandler = (e) => {
    const name = e.target.name

    switch (name) {
      case "twitter_handler":
        console.log(e.target.value)
        setTwitterHandler(e.target.value)
        break
      default:
        break
    }
  }

  function makeid(length) {
    var result = ""
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const onGenerateVerifyCode = () => {
    let code = makeid(6)
    setVerifyCode(code.toString())
  }

  const onSubmitVerify = () => {
    if (walletAddress === "") {
      alert("Wallet address can't be empty")
      return
    }

    if (twitterHandler === "") {
      alert("Twitter ScreenName can't be empty")
    }

    if (walletAddress !== "" && twitterHandler !== "") {
      axios
        .post("https://catemoon-backend-5pp7e.ondigitalocean.app/reward/link", {
          walletId: walletAddress,
          twitter: twitterHandler,
        })
        .then(({ data }) => {
          setResponse({ status: true, message: data.message })
        })
        .catch((err) => {
          setResponse({ status: false, message: err.message })
        })
    }
  }

  return (
    <VerifyComponent
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
      onChangeHandler={onChangeHandler}
      onSubmitVerify={onSubmitVerify}
      response={response}
      verifyCode={verifyCode}
    />
  )
}

export default Verify
