import React, { useState } from "react"
import { StyledClayPage } from "../clay"
import Layout from "../../components/Layout"
import Modal from "react-modal"
import { ModalContent, Item } from "../clay"

const Drawing = ({ subHeader, index, children }) => (
  <ModalContent col={2}>
    <div className="item text">
      <h3 className="subheader">{subHeader}</h3>
      <p className="content">{children}</p>
    </div>
    <Item>
      <img
        src={`../../../img/paintinganddrawing/drawing-${index}.png`}
        alt=""
      />
    </Item>
  </ModalContent>
)

const drawings = [
  {
    subHeader: "'Untitled",
    text: (
      <>
        Watercolour pencil and ink
        <br />
        2020
      </>
    ),
  },
  {
    subHeader: "'Untitled",
    text: (
      <>
        Watercolour pencil and ink
        <br />
        2020
      </>
    ),
  },
  {
    subHeader: "'Untitled",
    text: (
      <>
        Charcoal and Pastel
        <br />
        2020
      </>
    ),
  },
  {
    subHeader: "'Membrane",
    text: (
      <>
        Charcoal
        <br />
        2020
      </>
    ),
  },
  {
    subHeader: "'Untitled",
    text: (
      <>
        Pencil
        <br />
        2020
      </>
    ),
  },
  {
    subHeader: "'Untitled",
    text: (
      <>
        Acrylic on canvas <br />
        1m x 1m <br />
        2018
      </>
    ),
  },
  {
    subHeader: "'Free Float",
    text: (
      <>
        Acrylic on canvas <br />
        Acrylic, oil and spray paint on canvas
        <br />
        2019
      </>
    ),
  },

  {
    subHeader: "'Untitled (Hold)'",
    text: (
      <>
        Charcoal on canvas
        <br />
        2019
      </>
    ),
  },
]

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [tab, setTab] = useState(1)
  const closeModal = () => setIsModalOpen(false)

  return (
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
                  src={`../../../img/paintinganddrawing/drawing-${i}.png`}
                  key={`pad-image-${i}`}
                  onClick={() => {
                    setTab(i)
                    setIsModalOpen(true)
                  }}
                />
              ))}
            </div>
          </div>
        </section>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {
            <Drawing subHeader={drawings[tab - 1].subHeader} index={tab}>
              {drawings[tab - 1].text}
            </Drawing>
          }
        </Modal>
      </StyledClayPage>
    </Layout>
  )
}
