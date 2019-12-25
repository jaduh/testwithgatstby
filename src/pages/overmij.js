




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
<header>
  < Nav />
</header>


<div className= {styles.twee}>


<h2 className = {styles.aangenaam}>Aangenaam. Ik ben Jade.
</h2>
<img className= {styles.jade}src={Jade}/>
<h3 className= {styles.aangenaam2}> <span className={styles.enter}> En ik ben nogal geobsedeerd door storytelling, human-to-human marketing en innovatieve bedrijven die het beste voor hebben met de wereld.
</span> </h3>
<div className = {styles.paragraaf}>
<div className= {styles.imageContainer}>
  <img src={Hug}/>
</div>
  <p>Ooit was het mijn droom om journalist te zijn, maar dat hijgen en jagen achter het laatste nieuws bleek niet zo mijn ding. </p>

  <p>Verhalen maken daarentegen is waar mijn hart wel heerlijk gepassioneerd van klopt. Liefst doe ik hele dagen lang aan luisteren, luisteren, luisteren om vervolgens de juiste boodschap mooi en op maat in een reeks verhalen te verpakken. Heerlijk. </p>
          <div className= {styles.imageContainer}>
              <img src={Passion}/>
          </div>
          <p>Mijn missie is om mensen en bedrijven die het beste voor hebben met de wereld daarmee te helpen.

          </p>


            <h2 className = {styles.aangenaam}><span className={styles.enter}>Kan ik jou daarbij helpen?</span>
        </h2>





          <p>Ik maak al een eeuwigheid verhalen die aandacht trekken en vertrouwen winnen. Luisteren is daarbij mijn superpower. Meer weten?</p>

</div>


<Link to="/blog/">
<Button>Lees mijn Blog</Button>
</Link>
<a href="https://mailchi.mp/8cc43c9275e1/jadeyorks">
<Button>Ontvang mijn nieuwsbrief</Button>
</a>
<a href="mailto:jadeyorks@gmail.com">
<Button>Mail mij</Button>
</a>
 <a href="https://calendly.com/jadeyorks/15min" target="_blank">
<Button>Of laten we bellen</Button>
</a>
 </div>



</main>


    )
  }
}

export default IndexPage
