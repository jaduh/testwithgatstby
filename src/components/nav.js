import React from "react"

import styles from "../components/styles.module.css"


import { Link, graphql } from "gatsby"

function Nav(props) {
  return (



    <nav>
      <div className={styles.menuToggle}>

        <input type="checkbox" />


        <span>MENU</span>
        <span></span>
        <span></span>


        <ul className={styles.menu}>

          <a href="/blog"><li>Blog</li></a>
          <a href="/overmij"><li>Over Mij</li></a>
          <a href="https://mailchi.mp/8cc43c9275e1/jadeyorks" target="_blank"><li>Nieuwsbrief</li></a>
        </ul>
      </div>
    </nav>

  )
}
export default Nav
