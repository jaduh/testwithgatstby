import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Nav from "../components/nav"

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import styles from "../components/styles.module.css"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <div>
<div className= {styles.navblogcontainer}>
        < Nav />
</div>
      <main className = {styles.blogpagina}>


      <div className= {styles.buttoncontainer}>


        <Link to="/">
          Jade Yorks
        </Link>
      </div>
      <SEO title="All posts" />
      <Bio />


        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (


              <div key={node.fields.slug}>
                <h2
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>


      </main>
      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
