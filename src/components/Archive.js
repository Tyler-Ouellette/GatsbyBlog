/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <aside>
      <h3>Archive</h3>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => (
          <li>{edge.node.frontmatter.title}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Archive
