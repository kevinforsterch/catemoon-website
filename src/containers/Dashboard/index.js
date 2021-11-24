import { useState, useEffect } from "react"
import Hero from "components/Hero"
import Info from "components/Info"
import Tokenomics from "components/Tokenomics"
import Roadmap from "components/Roadmap"
import axios from "axios"
import { bscScanApiKey, catemoonAddress } from "constants/index"

const Dashboard = () => {
  const [date, setDate] = useState(0)
  const [price, setPrice] = useState(0)
  const [holders, setHolders] = useState(0)
  const [marketcap, setMarketcap] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const date = new Date()
      setDate(date)

      getPrice()
      getHolders()
    }, 3000)

    return () => clearTimeout(timer)
  }, [date])

  const getPrice = () =>
    axios({
      method: "get",
      baseURL: "https://api.pancakeswap.info/api/",
      url: `/v2/tokens/${catemoonAddress}`,
    })
      .then(({ data }) => {
        setPrice(data.data.price.slice(0, 13))
        setMarketcap((data.data.price * 100000000000).toFixed(0))
      })
      .catch((err) => {
        console.log(err.message)
        setPrice(0)
        setMarketcap(0)
      })

  const getHolders = () =>
    axios({
      method: "get",
      baseURL: "https://api.bscscan.com/",
      url: `/api?module=token&action=tokenholderlist&contractaddress=${catemoonAddress}&page=1&offset=1000000000&apikey=${bscScanApiKey}`,
    })
      .then(({ data }) => {
        setHolders(data.result.length)
      })
      .catch((err) => {
        setHolders(0)
      })

  return (
    <>
      <Hero holders={holders} price={price} marketcap={marketcap} />
      <Info />
      <Tokenomics />
      <Roadmap />
    </>
  )
}

export default Dashboard
