import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title?: string
}

const Meta: React.FC<Props> = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Helmet
      title={title ? title : site.siteMetadata.title}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : "%s"}
      meta={[
        {
          name: "description",
          content: site.siteMetadata.description
        }
      ]}
      htmlAttributes={{ lang: "ja" }}
    />
  )
}

export default Meta
