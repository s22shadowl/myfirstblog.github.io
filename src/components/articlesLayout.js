import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled";
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const shortCodes = { Link } // Provide common components here

const BackBtn = styled.button`
  color: white;
  background-color: black;
  position: absolute;
  top: 10px;
  right: 10px;
`

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{mdx.frontmatter.title}</title>
          <meta property="og:title" content={mdx.frontmatter.title}/>
        </Helmet>
      <BackBtn><a href="/myfirstblog.github.io/">回首頁</a></BackBtn>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortCodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;