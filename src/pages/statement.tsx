import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

export const StyledArtistStatement = styled.div`
  .header {
    padding-left: 20px;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #03507b;
  }

  .content {
    display: grid;
    grid-template-columns: 3fr 2fr;
    max-width: 1100px;

    .statement {
      font-size: 14px;
      letter-spacing: 2px;
    }

    .image-container {
      background: #d6d8dd;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;

      img {
        max-width: 100%;
      }
    }

    .column {
      padding: 20px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`

export default () => (
  <Layout>
    <StyledArtistStatement>
      <h2 className="header">Artist Statement</h2>
      <section className="content">
        <div className="column">
          <div className="statement">
            I look at creating artwork that encourages an audience, or ‘user’ as
            Olafur Eliasson would say, to reflect on the environment around
            them, their place within it and its place within them. Daisy
            Hildyard suggests that we/you/I have a ‘second body’; the first body
            consists of your skin, bones, organs, brain etc, whereas the second
            body can stretch across the world and touch it all simultaneously.
            Having grown up by and in the ocean, I relate to this idea deeply; I
            measure my day by the tides rather than a clock. This close
            relationship is undeniably reflected through my work. Regardless of
            the medium I am working with, the sea and my relationship with it
            remains a constant through my work. <br />
            Through multi-media I am able to explore where/if the boundaries of
            the human form actually begin and where/if they end. Interacting
            through film, the artwork becomes an observation of systems,
            processes and events; a witness. With clay, the interaction is
            visceral and intuitive; the final artwork becomes the remnants of
            this close relationship. The work often highlights the push and pull
            of life; investigating the boundaries that we, as humans, like to
            perceive as solid, but are actually porous and permeable. The
            Anthropocene, the period of time we are currently in, where human
            activity is the main influence on climate and the environment,
            repeatedly arises in my research. This is not necessarily through
            focussing on the actual impact that human activity is creating on
            the world, but my interest lies with the rising awareness that human
            activity is a part of the world, integrated into the environment,
            knotted into the ecology of the Earth. These ideas encourage agency
            in the user. Not just about having the ability to change things,
            agency is also about acknowledging that things change you. It
            encourages responsibility; to recognise the other
            spatio-temporalities that you affect, human and non-human, living or
            nonliving. <br />
            <br />
            ‘Get back to Nature… There is nothing to ‘get back to’, since the
            problem is not that things are truly distant but that they are in
            our face – they are our face’ – Timothy Morton
          </div>
        </div>
        <div className="column img-column">
          <div className="image-container">
            <img src="../../img/artist-statement-image.png" alt="" />
          </div>
        </div>
      </section>
    </StyledArtistStatement>
  </Layout>
)
