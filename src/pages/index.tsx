import React from "react"
import "./index.css"
import "semantic-ui-css/semantic.min.css"
import { Helmet } from "react-helmet"
import Slideshow from "../components/slide-show"
import Header from "../components/header"

const IndexPage: React.FC = () => (
  <>
    <Helmet>
      <title>筑波大学写真部</title>
      <meta name="description" content="筑波大学写真部のホームページです" />
    </Helmet>
    <Header fixed />
    <Slideshow
      imageUrls={[
        "https://pbs.twimg.com/media/DN3xyoOUIAEb0sE?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/D9QmfeRU4AA2Opz?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/D8gjDA_UIAEk8OV?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/D7VV8AkUIAA6ksT?format=jpg&name=large",
        "https://pbs.twimg.com/media/D3mc_PZV4AED70c?format=jpg&name=4096x4096"
      ]}
    />
  </>
)

export default IndexPage
