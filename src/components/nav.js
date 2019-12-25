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
              <a href="/"><li>Home</li></a>
          <a href="/blog"><li>Blog</li></a>
          <a href="/overmij"><li>Over Mij</li></a>
          <a href="https://erikterwan.com/" target="_blank"><li>Nieuwsbrief</li></a>
        </ul>
      </div>
    </nav>

  )
}
export default Nav
