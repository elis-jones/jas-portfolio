import React from "react"
import Layout from "../../components/Layout"
import { StyledClayPage } from "../clay"

export default () => (
  <Layout>
    <StyledClayPage>
      <h2 className="header">Film & Other</h2>
      <section className="content">
        <div className="column">
          <p className="statement">
            With film, I attempt to capture/observe the different
            spatiotemporalities that are not human, as well as the crossover of
            temporalities between objects. Often the objects I observe are what
            Timothy Morton describe as ‘Hyperobjects’; these are things that are
            ‘massively distributed through space and time’.
          </p>
        </div>
        <div className="column">
          <div className="images-container">
            {[1, 2, 3, 4, 5].map(i => (
              <img
                src={`../../../img/filmandother/filmandother-index-${i}.png`}
                key={`film-image-${i}`}
              />
            ))}
          </div>
        </div>
      </section>
    </StyledClayPage>
  </Layout>
)
