import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Header } from "semantic-ui-react"
import css from "@emotion/css"

const Blogs: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `
  )

  const posts = allMarkdownRemark.edges as any[]

  return (
    <>
      <Meta title="Blogs" />
      <PageContainer title="Blogs">
        {posts.map(({ node }) => {
          return (
            <div key={node.fields.slug} css={css({ marginBottom: "40px" })}>
              <Link to={node.fields.slug}>
                <Header as="h2">{node.frontmatter.title}</Header>
              </Link>
              <div
                css={css({
                  fontSize: "12px",
                  color: "grey",
                  marginTop: "4px"
                })}
              >
                {node.frontmatter.date}
              </div>
              <p
                css={css({ marginTop: "16px" })}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </div>
          )
        })}
      </PageContainer>
    </>
  )
}

export default Blogs
