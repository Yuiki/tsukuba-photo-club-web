import React from "react"
import css from "@emotion/css"
import { Menu } from "semantic-ui-react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

type Props = {
  fixed?: boolean
}

const Header: React.FC<Props> = (props) => (
  <StaticQuery
    query={query}
    render={(data) => (
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
            <Img fixed={data.file.childImageSharp.fixed} />
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
            <Menu.Item name="blogs" as={Link} to="/blogs" />
            <Menu.Item name="gallery" />
            <Menu.Item name="contact" as={Link} to="/contact" />
          </Menu>
        </div>
      </div>
    )}
  />
)

export default Header

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300, height: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
