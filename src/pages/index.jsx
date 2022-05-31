import * as React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby"

// styles
const Page = styled.div`
  color: #232129;
  background-color: gray;
  padding: 96px;
`;

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  padding: 20px;
  color: white;
  background-color: black;
`;

const List = styled.ul`
  margin-bottom: 96px;
  padding-left: 0;
`;

const Link = styled.a`
  color: red;
  font-weight: bold;
  font-size: 24px;
  vertical-align: 5%;
`;

const Game = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: black;
  max-width: 500px;
`;

const GameInfo = styled.div`
  display: flex;
`;



const Description = styled.p`
  color: white;
  font-size: 14px;
  margin: 10px;
  line-height: 1.5rem;
`;

const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

// markup
const IndexPage = ({data}) => {

  const { edges: posts } = data.allMdx

  return (
    <Page>
      <title>史萊姆的第二十二個家</title>
      <Logo
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
      <Heading>歡迎來到史萊姆的第二十二個家</Heading>
      <List>
        {posts.map(({ node: post }) => (
          <Game key={post.id}>
            <Link href={`articles/${post.slug}`}>{post.frontmatter.title}</Link>
            <GameInfo>
              <Description>{post.excerpt}</Description>
            </GameInfo>
          </Game>
        ))}
      </List>
    </Page>
  );
};


export const pageQuery = graphql`
  query indexPage {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`

export default IndexPage;
