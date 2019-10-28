import React from "react"
import Slideshow from "./Slideshow"
import Header from "./Header"

const Home: React.FC = () => (
  <>
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

export default Home
