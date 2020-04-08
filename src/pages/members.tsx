import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql } from "gatsby"
import { Card, Icon, Image } from "semantic-ui-react"
import css from "@emotion/css"

const GRADE_MAPPING: { [n: number]: string } = {
  1: "学部1年",
  2: "学部2年",
  3: "学部3年",
  4: "学部4年",
  5: "修士1年",
  6: "修士2年",
  7: "博士1年",
  8: "博士2年",
  9: "博士3年",
}

const aCss = css({
  color: "inherit",
  textDecoration: "none",
})

const Members: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___grade], order: ASC }
          filter: { fields: { collection: { eq: "members" } } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                name
                image
                grade
                department
                equipment
                twitter
                instagram
                comment
              }
            }
          }
        }
      }
    `
  )

  const members = allMarkdownRemark.edges as any[]

  return (
    <>
      <Meta title="Members" />
      <PageContainer title="Members" text={false}>
        <Card.Group itemsPerRow={5} doubling stackable>
          {members.map(({ node }) => {
            return (
              <Card key={node.fields.slug}>
                <Image src={`${node.frontmatter.image}`} wrapped />
                <Card.Content>
                  <Card.Header>{node.frontmatter.name}</Card.Header>
                  <Card.Meta>
                    <span>{node.frontmatter.department}</span>
                    <span>{GRADE_MAPPING[node.frontmatter.grade]}</span>
                  </Card.Meta>
                  <Card.Description>
                    <div>
                      <Icon name="comment" />
                      {node.frontmatter.comment}
                    </div>
                    {node.frontmatter.equipment ? (
                      <div>
                        <Icon name="camera" />
                        {node.frontmatter.equipment}
                      </div>
                    ) : (
                      <></>
                    )}
                    {node.frontmatter.twitter ? (
                      <div>
                        <a
                          css={aCss}
                          href={`https://twitter.com/${node.frontmatter.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon name="twitter" />
                          {node.frontmatter.twitter}
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                    {node.frontmatter.instagram ? (
                      <div>
                        <a
                          css={aCss}
                          href={`https://www.instagram.com/${node.frontmatter.instagram}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon name="instagram" />
                          {node.frontmatter.instagram}
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                  </Card.Description>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </PageContainer>
    </>
  )
}

export default Members
