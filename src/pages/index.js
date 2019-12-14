import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Jade from "../images/jadejade.jpg"
import Hug from "../images/hug.png"
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



< Nav />

    <div className= {styles.een}>




        <div className= {styles.subeen}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className= {styles.kop}>
            <h1>Jouw bedrijf doet mooie dingen.</h1>
            <h2 className = {styles.ondertitel}>
                    En dat mogen best wat meer mensen weten.

            </h2>

        </div>

    </div>
    </div>

    <div className= {styles.twee}>





  <h2 className = {styles.aangenaam}>Hoi, ik ben Jade <span role="img" aria-label="wave emoji">
    👋🏽  </span>

   </h2>
<img className= {styles.jade}src={Jade}/>
<h3 className= {styles.aangenaam2}>Copywriter gespecialiseerd in Human to Human storytelling marketing.</h3>
<div className = {styles.paragraaf}>
<p>Laten we eerlijk zijn. Tegenwoordig heeft niemand tijd voor gelikte B2C-praatjes. Daarvoor is de hoeveelheid nutteloze informatie die een mens dagelijks moet verduren simpelweg te groot.

</p>
<div className= {styles.imageContainer}>
<img src={Hug}/>
</div>

<p>Waar Iedereen wel naar hunkert is naar menselijke connecties. Mensen willen zich verbonden voelen met mensen. </p>
</div>
<Link to="/blog/">
  <Button>VERTEL ME MEER</Button>
</Link>
   </div>







</main>


    )
  }
}

export default IndexPage
