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
      backgroundColor: props.fixed ? "#ffffffdd" : "#eeeeee44",
      position: props.fixed ? "fixed" : undefined,
      width: "100vw",
      zIndex: 1,
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    })}
  >
    <div
      css={css`
        width: 100%;
        display: flex;
        @media (max-width: 800px) {
          align-items: center;
          flex-direction: column;
        }
      `}
    >
      <Link
        to="/"
        css={css`
          margin-right: auto;
          margin-left: 20px;
          @media (max-width: 800px) {
            margin-right: 0;
            margin-left: 0;
          }
        `}
      >
        <img src={logo} alt="logo" />
      </Link>
      <Menu
        text
        css={css`
          margin-right: 20px !important;
          @media (max-width: 800px) {
            margin-right: -0.5em !important;
            margin-top: 0 !important;
          }
          @media (max-width: 420px) {
            font-size: 10px !important;
          }
        `}
      >
        <Menu.Item name="about" as={Link} to="/about" />
        <Menu.Item name="members" />
        <Menu.Item name="activities" />
        <Menu.Item name="exhibitions" />
        <Menu.Item name="gallery" />
        <Menu.Item name="contact" as={Link} to="/contact" />
      </Menu>
    </div>
  </div>
)

export default Header
