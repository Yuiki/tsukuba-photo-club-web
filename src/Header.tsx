import React from "react"
import css from "@emotion/css"
import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"
import logo from "./logo.png"

type Props = {
  fixed?: boolean
}

const Header: React.FC<Props> = (props) => (
  <div
    css={css({
      backgroundColor: props.fixed ? "#ffffffdd" : "#eeeeee22",
      position: props.fixed ? "fixed" : undefined,
      width: "100vw",
      zIndex: 1,
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    })}
  >
    <div
      css={css({
        width: "100%",
        display: "flex"
      })}
    >
      <Link to="/" css={css({ marginRight: "auto", marginLeft: "20px" })}>
        <img src={logo} alt="logo" />
      </Link>
      <Menu text css={css({ marginRight: "20px !important" })}>
        <Menu.Item name="about" as={Link} to="/about" />
        <Menu.Item name="members" />
        <Menu.Item name="activities" />
        <Menu.Item name="exhibitions" />
        <Menu.Item name="gallery" />
        <Menu.Item name="contact" />
      </Menu>
    </div>
  </div>
)

export default Header
