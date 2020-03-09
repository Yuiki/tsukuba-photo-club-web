import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title?: string
  description?: string
  siteUrl?: string
  image?: any
}

const Meta: React.FC<Props> = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const title = props.title ?? site.siteMetadata.title
  const description = props.description ?? site.siteMetadata.description
  return (
    <Helmet
      title={title}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : "%s"}
      meta={[
        {
          name: "description",
          content: description
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        {
          property: "og:image",
          content: `${props.siteUrl}${props.image ?? "/favicon.ico"}`
        }
      ]}
      htmlAttributes={{ lang: "ja" }}
    />
  )
}

export default Meta
