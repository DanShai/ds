import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import 'katex/dist/katex.min.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next, index, total } = this.props.pageContext

    console.log(this.props.pageContext)
    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <section className="container">
          <Link className="button special icon fa-back" to="/blog">
            Back to Blog
          </Link>
          <h3>
            {post.frontmatter.date} , {post.frontmatter.author}
          </h3>
          <h2>{post.frontmatter.title}</h2>
          <div
            className="box"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <ul className="pagination">
            {previous && (
              <li>
                <span className="button special">
                  <Link to={previous.fields.slug} rel="prev">
                    {previous.frontmatter.title}
                  </Link>
                </span>
                {next && <span className="page active">&hellip;</span>}
              </li>
            )}

            {next && (
              <li>
                {previous && <span className="page active">&hellip;</span>}
                <span className="button special">
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                  </Link>
                </span>
              </li>
            )}
          </ul>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
