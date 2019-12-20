




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
<Link to="/">
  <Button>Home</Button>
</Link>


<div className= {styles.twee}>


<h2 className = {styles.aangenaam}>Hoi, ik ben Jade <span role="img" aria-label="wave emoji">
              👋🏽  </span>
</h2>
<img className= {styles.jade}src={Jade}/>
<h3 className= {styles.aangenaam2}> <span className={styles.enter}>Copywriter, Storyteller en</span> <span className={styles.enter}>Human-to-Human Marketeer</span></h3>
<div className = {styles.paragraaf}>
<div className= {styles.imageContainer}>
  <img src={Hug}/>
</div>
  <p>Laten we eerlijk zijn. Tegenwoordig heeft niemand tijd voor gelikte B2C-praatjes. Daarvoor is de hoeveelheid nutteloze informatie die een mens dagelijks moet verduren simpelweg te groot.</p>

  <p>Wel hunkert iedereen naar menselijke connecties. Mensen willen zich verbonden voelen met mensen. </p>
          <div className= {styles.imageContainer}>
              <img src={Passion}/>
          </div>
          <p>Maak het ze gemakkelijk om een warme band met jouw bedrijf te krijgen.  Focus je marketing niet steeds op je product, maar op de mensen die er gepassioneerd over zijn.
          </p>


            <h2 className = {styles.aangenaam}><span className={styles.enter}>Kan je daar wat hulp bij gebruiken?</span><span className={styles.enter}>
          Ik ben er voor je!</span></h2>





          <p>Ik maak al een eeuwigheid verhalen die aandacht trekken en vertrouwen winnen. Luisteren is daarbij mijn superpower. Wil je weten hoe ik dat precies aanpak?</p>

</div>


<Link to="/blog/">
<Button>Lees mijn Blog</Button>
</Link>
<Link to="/blog/">
<Button>Ontvang mijn nieuwsbrief</Button>
</Link>
<Link to="/blog/">
<Button>Mail mij</Button>
</Link>
<Link to="/blog/">
<Button>Of laten we bellen</Button>
</Link>
 </div>



</main>


    )
  }
}

export default IndexPage
