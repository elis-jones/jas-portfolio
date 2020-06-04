import React from "react"
import { StyledClayPage } from "../clay"
import Layout from "../../components/Layout"

export default () => (
  <Layout>
    <StyledClayPage col={3}>
      <h2 className="header">Painting & Drawing</h2>
      <section className="content">
        <div className="column">
          <p className="statement">
            Exploring ideas of porosity, fluidity, and the intangible push and
            pull of life through painting and drawing.
          </p>
        </div>
        <div className="column">
          <div className="images-container">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <img
                src={`../../../img/pictureanddrawing/pad-index-${i}.png`}
                key={`pad-image-${i}`}
              />
            ))}
          </div>
        </div>
      </section>
    </StyledClayPage>
  </Layout>
)
