import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Jade from "../images/jadejade.jpg"
import Pijltje from "../images/pijltje.png"
import Insta from "../images/instagram-logo.png"
import Keyboard from "../images/keyboard.png"
import Video from "../images/video.png"
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
    <div className= {styles.buttoncontainer}>
      <Link to="/blog/">
        <Button>BLOG</Button>
      </Link>
    </div>
    <div className= {styles.een}>


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
        <img className={styles.pijl}  src={Pijltje}/>
    </div>
    <div className= {styles.twee}>





  <h2 className = {styles.aangenaam}>Hoi, ik ben Jade <span role="img" aria-label="wave emoji">
    👋🏽  </span>

   </h2>
<img className= {styles.jade}src={Jade}/>
<h3 className= {styles.aangenaam2}>Ik maak bedrijven online zichtbaar met verhalen die mensen raken.  Copywriting voor je salespage, storytelling voor op je blog of video’s voor je sociale mediakanalen. Daarvoor zit je bij mij goed.</h3>
<Link to="/blog/">
  <Button>VERTEL ME MEER</Button>
</Link>
   </div>







</main>


    )
  }
}

export default IndexPage
