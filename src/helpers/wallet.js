import detectEthereumProvider from "@metamask/detect-provider"
import { chainId } from "constants/index"

export const connectWallet = async () => {
  const provider = await detectEthereumProvider()

  if (provider) {
    try {
      const walletChainId = await provider.request({
        method: "eth_chainId",
      })

      if (parseInt(walletChainId) === parseInt(chainId)) {
        const addressArray = await provider.request({
          method: "eth_requestAccounts",
        })

        if (addressArray.length) {
          return {
            address: addressArray[0],
            status: "Connected",
          }
        } else {
          return {
            address: "",
            status: "No wallet connected",
          }
        }
      } else {
        provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId }],
        })

        return {
          address: "",
          status: "Was on the other chain",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: `😥 ${err.message}`,
      }
    }
  } else {
    console.log(`🦊 You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)`)
    return {
      address: "",
      status: "Can't find web3 provider",
    }
  }
}

export const addBSCMainnet = async () => {
  const provider = await detectEthereumProvider()

  if (provider) {
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: chainId,
            chainName: "Binance Smart Chain Mainnet",
            nativeCurrency: {
              name: "BNB",
              symbol: "BNB",
              decimals: 18,
            },
            rpcUrls: ["https://bsc-dataseed.binance.org"],
            blockExplorerUrls: ["https://bscscan.com/"],
          },
        ],
      })
    } catch (err) {
      console.log("Chain Add Error")
    }
  }
}

export const getCurrentWalletConnected = async () => {
  const provider = await detectEthereumProvider()

  if (provider) {
    try {
      const addressArray = await provider.request({
        method: "eth_accounts",
      })
      const walletChainId = await provider.request({
        method: "eth_chainId",
      })
      if (addressArray.length && walletChainId === chainId) {
        return {
          address: addressArray[0],
          status: "Get your CryptoAthletes pack, 0.05ETH",
        }
      } else {
        return {
          address: "",
          status: "Connect Metamask",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: `😥 ${err.message}`,
      }
    }
  } else {
    console.log(`🦊 You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)`)
    return {
      address: "",
      status: "Can't find web3 provider",
    }
  }
}
