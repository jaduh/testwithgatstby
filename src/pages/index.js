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
<SEO
  title="Home"
  keywords={[`blog`, `Jade Yorks`, `Human to Human marketing`, `storytelling`, `content marketing`]}/>

  <header>
    < Nav />
    <div className= {styles.buttoncontainer}>


      <Link to="/">
        Jade Yorks
      </Link>
    </div>
  </header>

    <div className= {styles.twee}>



    <h2 className = {styles.aangenaam}>Hoi, ik ben Jade <span role="img" aria-label="wave emoji">
                  👋🏽  </span>
    </h2>
    <img className= {styles.jade}src={Jade}/>
    <h3 className= {styles.aangenaam2}> <span className={styles.enter}>Copywriter, Storyteller en</span> <span className={styles.enter}>Human-to-Human Marketeer</span></h3>
<p>Ik zie in alles een goed verhaal<span className={styles.enter}> en in iedereen een mooi mens.</span></p>
     <a href="https://mailchi.mp/8cc43c9275e1/jadeyorks" target="_blank">
      <Button className= {styles.button}>Schrijf je in voor mijn nieuwsbrief</Button>
    </a>
  </div>



<footer>


</footer>






</main>


    )
  }
}

export default IndexPage
