import React, { useState } from "react"
import Layout from "../../components/Layout"
import styled, { css } from "styled-components"
import Modal from "react-modal"

export const StyledClayPage = styled.div<{ col?: number }>`
  max-width: 1100px;
  color: #2c4c6e;
  padding-right: 10px;
  padding-left: 10px;

  .header {
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #03507b;
  }

  .content {
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding-bottom: 50px;
    grid-gap: 20px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }

    .statement {
      margin: 0;
      padding: 0;
      letter-spacing: 2px;
      font-size: 18px;
    }

    .images-container {
      display: grid;
      grid-gap: 30px;
      background: rgba(214, 216, 221, 0.39);
      box-sizing: border-box;
      padding: 30px;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(${({ col }) => (col ? col : 2)}, 1fr);

      img {
        justify-self: center;
        max-width: 100%;
      }
    }
    .info {
      text-align: center;
    }
  }
`

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => setIsModalOpen(false)

  return (
    <Layout>
      <StyledClayPage>
        <h2 className="header">Clay</h2>
        <section className="content">
          <div className="column">
            <p className="statement">
              A primary element of my work is clay, which I found a few hundred
              metres from where I grew up; where has also become a sanctuary
              during the coronavirus pandemic. With each tide different elements
              of the cliffs are revealed, pulling down rocks that have been
              imbedded in it for thousands of years. Although I feel like I am
              connecting deeply with the clay, spending time with it spinning
              and turning through my fingers, this is just a brief flicker for
              the clay itself.
            </p>
          </div>
          <div className="column">
            <div className="images-container">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <img
                  src={`../../../img/clay/clay-index-${i}.png`}
                  key={`clay-image-${i}`}
                />
              ))}
            </div>
            <p className="info">
              How to collect, clean and use your own local clay{" "}
            </p>
          </div>
        </section>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          modal
        </Modal>
      </StyledClayPage>
    </Layout>
  )
}
