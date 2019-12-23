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
  </header>

    <div className= {styles.twee}>



    <h2 className = {styles.aangenaam}>Hoi, ik ben Jade <span role="img" aria-label="wave emoji">
                  👋🏽  </span>
    </h2>
    <img className= {styles.jade}src={Jade}/>
    <h3 className= {styles.aangenaam2}> <span className={styles.enter}>Copywriter, Storyteller en</span> <span className={styles.enter}>Human-to-Human Marketeer</span></h3>
  </div>




    <Link to="https://gmail.us20.list-manage.com/subscribe?u=26f55f436294170531290a327&id=0ac7a752f5/">
      <Button className= {styles.button}>Schrijf je in voor mijn nieuwsbrief</Button>
    </Link>








</main>


    )
  }
}

export default IndexPage
