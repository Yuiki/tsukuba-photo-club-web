import React from "react"
import { css } from "@emotion/core"
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  PocketShareButton,
  PocketIcon
} from "react-share"

type Props = {
  href: string
}

const ShareButtons: React.FC<Props> = (props) => (
  <div
    css={css`
      margin-bottom: 8px;
      button {
        margin-right: 8px;
      }
    `}
  >
    <TwitterShareButton url={props.href} className="mr-2">
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <FacebookShareButton url={props.href} className="mr-2">
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <PocketShareButton url={props.href} className="mr-2">
      <PocketIcon size={32} round />
    </PocketShareButton>
  </div>
)

export default ShareButtons
