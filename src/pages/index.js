import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Jade from "../images/jadejade.jpg"
import Insta from "../images/instagram-logo.png"
import Keyboard from "../images/keyboard.png"
import Video from "../images/video.png"


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
            <h2>
                    En dat mogen best wat meer mensen weten.

            </h2>
        </div>
    </div>
    <div className= {styles.twee}>





  <h2 className = {styles.aangenaam}>Hoi, ik ben Jade <span>  </span>
      {/*<span role="img" aria-label="wave emoji">
        👋🏽
      </span>*/}
   </h2>
<img src={Jade}/>
   </div>



<div className ={styles.drie}>

{/* <p>En voor boeiende verhalen die jouw doelgroep echt wil horen, moet je bij mij zijn. </p>*/}
<p>Het is druk op het internet. Zo druk dat jouw belangrijkste boodschap niet bij de juiste mensen aankomt. Eenvoudige oplossing nodig? Vertel verhalen die mensen willen horen in de vorm die het beste bij hen past.</p>
<p>Daar help ik je graag bij
<span>  </span>
<span role="img" aria-label="wave emoji">
🙋🏽
</span>
</p>
</div>



  <div className ={styles.vier}>
      <div className ={styles.tehuur}>
        <img src={Keyboard}/>
        <h2>Blogverhalen</h2>
        <p>Blogverhalen die jouw mensen echt willen lezen en delen. Sterker nog: ze kunnen er maar niet over ophouden.  Ik maak ze voor je. Helemaal op maat van je brand en SEO-proof.</p>
        <Link to="/blog/">
          <Button>Meer info, please</Button>
        </Link>
      </div>
      <div className ={styles.tehuur}>
      <img src={Video}/>
        <h2>Videoverhalen</h2>
      <p>Dat mensen heel graag naar bewegende beelden kijken, wist je natuurijk al. Maar doe je er ook iets mee? Zo niet, help ik je graag een handje. Ik maak mooie videoverhalen voor je of ik begeleid je om er zelf mee aan de slag te gaan.</p>
      <Link to="/blog/">
        <Button>Meer info, please</Button>
      </Link>
      </div>
      <div className ={styles.tehuur}>
      <img src={Insta}/>
        <h2>Instagramverhalen</h2>
      <p>Al die mooie verhalen maken is leuk, maar ze moeten natuurlijk wel gevonden worden door de juiste mensen. Ik help je graag met je Instagram-strategie en de distributie van je mooie verhalen.</p>
      <Link to="/blog/">
        <Button>Meer info, please</Button>
      </Link>

      </div>

  </div>
</main>


    )
  }
}

export default IndexPage
