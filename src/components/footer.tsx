import React from "react"
import css from "@emotion/css"
import { Icon } from "semantic-ui-react"

const Footer: React.FC = () => (
  <div
    css={css({
      alignSelf: "center",
      width: "100%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      marginTop: "16px",
      marginBottom: "4px"
    })}
  >
    <p>©︎ 2020 筑波大学写真部</p>
    <div css={css({ position: "absolute", right: "12px" })}>
      <a
        href="https://twitter.com/tsukuba_photo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="twitter"
          size="large"
          color="black"
          css={css({
            marginRight: "8px !important"
          })}
        />
      </a>
      <a
        href="https://www.instagram.com/tsukuba.photoclub/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="instagram" size="large" color="black" />
      </a>
    </div>
  </div>
)

export default Footer
