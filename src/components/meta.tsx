import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title?: string
  description?: string
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
      titleTemplate={props.title ? `%s | ${site.siteMetadata.title}` : "%s"}
      meta={[
        {
          name: "description",
          content: description
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        {
          property: "og:image",
          content: `${site.siteMetadata.siteUrl}${props.image ?? "/ogp.jpg"}`
        },
        {
          property: "og:site_name",
          content: "筑波大学写真部"
        },
        { property: "twitter:card", content: "summary" },
        { property: "twitter:site", content: "@tsukuba_photo" }
      ]}
      htmlAttributes={{ lang: "ja" }}
    />
  )
}

export default Meta
