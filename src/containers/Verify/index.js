import { useState, useEffect } from "react"
import { connectWallet, addBSCMainnet } from "helpers/wallet"
import VerifyComponent from "components/Verify"

const Verify = () => {
  const [walletAddress, setWalletAddress] = useState("")
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

  return (
    <VerifyComponent
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
      verifyCode={verifyCode}
    />
  )
}

export default Verify
