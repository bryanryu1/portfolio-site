import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Water = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "waterapp.png" }) {
        childImageSharp {
          fixed(width: 320, height: 200, fit: CONTAIN) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)


  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Water
