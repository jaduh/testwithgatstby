import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import styles from "../components/pijltje.css"




function Pijltje() {
  return (


          <Container>

<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />


    <span>MENU</span>
    <span></span>
    <span></span>


    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
</nav>
          </Container>
        )

}
