import * as React from "react"
// import {Layout} from 'gatsby'
import Layout from "../components/layout"
import Herosection from "../pages/herosection"
import Hearder from '../components/header'
const IndexPage = () => {
  return (
    <div>
      <Layout />
      <Herosection />
      <Hearder />

    </div>
  )
}
export default IndexPage
