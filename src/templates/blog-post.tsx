import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { graphql, Link } from "gatsby"
import css from "@emotion/css"
import { Header } from "semantic-ui-react"
import ShareButtons from "../components/share-buttons"

type Props = {
  data: any
  pageContext: any
  location: any
}

const BlogPostTemplate: React.FC<Props> = (props) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <>
      <Meta
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <PageContainer>
        <Header
          as="h1"
          css={css({
            fontFamily: "sans-serif !important;"
          })}
        >
          {post.frontmatter.title}
        </Header>
        <div
          css={css({
            color: "grey",
            marginBottom: "24px"
          })}
        >
          {post.frontmatter.date}
        </div>
        <ShareButtons href={props.location.href} />
        <span dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr css={css({ marginTop: "24px" })} />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </PageContainer>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
  }
`
