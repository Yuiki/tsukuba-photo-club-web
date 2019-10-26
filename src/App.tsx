import React from "react"
import logo from "./logo.png"
import { css } from "@emotion/core"
import { Menu } from "semantic-ui-react"
import Slideshow from "./Slideshow"

const App: React.FC = () => {
  return (
    <>
      <div
        css={css({
          backgroundColor: "#ffffffbb",
          position: "fixed",
          width: "100vw",
          zIndex: 1
        })}
      >
        <div
          css={css({
            width: "100%",
            display: "flex"
          })}
        >
          <img
            src={logo}
            css={css({ marginRight: "auto", marginLeft: "20px" })}
            alt="logo"
          />
          <Menu text css={css({ marginRight: "20px !important" })}>
            <Menu.Item name="about" />
            <Menu.Item name="members" />
            <Menu.Item name="activities" />
            <Menu.Item name="exhibitions" />
            <Menu.Item name="gallery" />
            <Menu.Item name="contact" />
          </Menu>
        </div>
      </div>
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
}

export default App
