import React, { ReactNode } from "react"
import AppHeader from "./Header"
import { Container, Header, Divider } from "semantic-ui-react"
import css from "@emotion/css"
import Footer from "./Footer"

type Props = {
  title: string
  children: ReactNode
}

const PageContainer: React.FC<Props> = ({ title, children }) => (
  <div
    css={css({
      display: "flex",
      flexFlow: "column",
      minHeight: "100vh"
    })}
  >
    <AppHeader />
    <Container
      text
      css={css({
        paddingTop: "64px",
        flex: 1
      })}
    >
      <Header as="h1" textAlign="center">
        {title}
      </Header>
      <Divider />
      <div
        css={css({
          paddingTop: "16px"
        })}
      >
        {children}
      </div>
    </Container>
    <Footer />
  </div>
)

export default PageContainer
