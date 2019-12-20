import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Jade from "../images/jadejade.jpg"
import Hug from "../images/hug.png"
import Passion from "../images/passion.png"
import Nav from "../components/nav.js"


// import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styles from "../components/styles.module.css"



class IndexPage extends React.Component {
  render() {
    const siteTitle = "Zei er iemand scoren met verhalen?"

    return (

      // <Layout location={this.props.location} title={siteTitle}>

<main>
  <div className= {styles.een}>
    <header>
      < Nav />
    </header>
    <div className= {styles.subeen}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}/>
      <div className= {styles.kop}>
        <h1>Jouw bedrijf doet mooie dingen.</h1>
        <h2 className = {styles.ondertitel}>
                      En dat mogen best wat meer mensen weten.</h2>
      </div>
    </div>
    <Link to="/overmij/">
      <Button className= {styles.button}>VERTEL ME MEER</Button>
    </Link>
  </div>







</main>


    )
  }
}

export default IndexPage
