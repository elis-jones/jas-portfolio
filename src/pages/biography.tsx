import React from "react"
import Layout from "../components/Layout"
import { StyledArtistStatement } from "./statement"

export default () => (
  <Layout>
    <StyledArtistStatement>
      <h2 className="header">Biography</h2>
      <section className="content">
        <div className="column">
          <div className="statement">
            Currently based in West Wales, studying BA Fine Art: Painting at
            Camberwell College of Art. Engaging with a variety of media,
            including film, painting, drawing, and ceramics. Creating artwork
            that investigates the interaction of human and nonhuman beings in
            the context of object oriented ontology (OOO) and agency of the
            ‘user’.
            <br />
            <br />
            EXHIBITIONS <br />
            - Dec 2016 - Manchester House, New Quay - Curated and exhibited
            <br />
            - Aug 2019 - ‘Into The Tide’ - Curated and exhibited <br />
            - May 2019 - ‘Nothing Knew’ - London. Collaborative exhibition.
            <br /> <br />
            PUBLICATIONS <br />
            The Soon Project Magazine <br />
            <br />
            EDUCATION <br />
            2017 - current - BA Fine Art: Painting - Camberwell College of Art
            <br />
            2016 - Art & Design Foundation Diploma - Coleg Sir Gar <br />
            <br />
            <br />
            CONTACT <br />
            @jasminellywela <br />
            <br />
            jasminellywela@gmail.com
          </div>
        </div>
        <div className="column small">
          <div className="image-container">
            <img src="../../img/biography.png" alt="" />
          </div>
        </div>
      </section>
    </StyledArtistStatement>
  </Layout>
)
