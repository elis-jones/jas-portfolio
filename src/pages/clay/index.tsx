import React, { useState } from "react"
import Layout from "../../components/Layout"
import styled, { css } from "styled-components"
import Modal from "react-modal"
import ReactPlayer from "react-player"

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
        cursor: pointer;
      }
    }
    .info {
      text-align: center;
    }
  }
`

export const ModalContent = styled.div<{ col?: number; bg?: string }>`
  display: grid;
  justify-items: center;
  align-items: center;
  color: #123861;
  grid-gap: 20px;
  height: 100%;
  grid-template-columns: repeat(${({ col }) => (col ? col : 3)}, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .full-width {
    grid-column: 1/-1;
  }

  .padded {
    padding: 40px 0px;
  }

  .text {
    text-align: center;
    line-height: 2rem;
    letter-spacing: 2px;
  }

  .img {
    padding: 20px;
    background: rgba(214, 216, 221, 0.39);
    img {
      max-width: 100%;
    }
  }
`

export const Item = styled.div<{ bg?: string }>`
  padding: 20px;
  background: ${({ bg }) => (bg ? bg : "rgba(214, 216, 221, 0.39)")};

  img {
    max-width: 100%;
  }
`

export const Video = styled.div`
  position: relative;
  width: 600px;
  max-width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    width: 400px;
  }

  @media (max-width: 530px) {
    width: 300px;
  }

  @media (max-width: 440px) {
    width: 200px;
  }
`

const Horizon = () => (
  <ModalContent col={2}>
    <div className="item text padded">
      <h3 className="subheader">'Horizon'</h3>
      <p className="content ">26min 47sec film</p>
    </div>
    <Video>
      <ReactPlayer
        className="player"
        playing
        url="https://vimeo.com/413289123"
        width="100%"
        height="100%"
      />
    </Video>
  </ModalContent>
)

const Drip = () => (
  <ModalContent col={2}>
    <div className="item text padded">
      <h3 className="subheader">'Drip'</h3>
      <p className="content ">17min 55sec film </p>
    </div>
    <Video>
      <ReactPlayer
        className="player"
        playing
        url="https://vimeo.com/413297053"
        width="100%"
        height="100%"
      />
    </Video>
  </ModalContent>
)

const ClayFilm = () => (
  <ModalContent col={2}>
    <div className="item text padded">
      <h3 className="subheader">'Clay'</h3>
      <p className="content ">
        1min 30sec film
        <br />
        <br />
        In collaboration with Hattie Morrison, Leia Morrison and Isabelle
        Willis.
        <br />
        <br />
        videography by Leia Morrison
      </p>
    </div>
    <Video>
      <ReactPlayer
        className="player"
        playing
        url="https://vimeo.com/390519798"
        width="100%"
        height="100%"
      />
    </Video>
    <p className="content full-width">
      Wet sand and rock, watching the clock of the tide—
      <br />
      <br />
      long and slow and rolling. Beginning of the waves.
      <br />
      <br />
      A soft shell, outer layer cracking of clay. <br />
      <br />
      We mend holes with small shoals of dust sized fish and rusting days—
      <br />
      <br />
      squeezed, pressed <br />
      <br />
      then washed away.
      <br />
      <br />
      Crazed ships sunken and drunken dunked sailors. Elastic, plastic packets,
      powerless batteries, barred car bonnets, cigarettes, dead pop stars, tar.
      Thousands, hundreds, tens of bits and pieces blended into clay. The whole
      past passing through hands and then
      <br />
      <br />
      washed away
      <br />
      <br />
      wash e
      d&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;w&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;y{" "}
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s{" "}
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h&nbsp;&nbsp;&nbsp;&nbsp;i
      <br />
      <br />
      n<br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;w{" "}
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y{" "}
      <br />
      <br />
      Poetry by Hattie Morrison <br />
    </p>
  </ModalContent>
)

const HoldingAsYouMove = () => (
  <ModalContent>
    <div className="item text">
      <h3 className="subheader">‘Holding as you move’</h3>
      <p className="content">
        Temporal piece
        <br />
        Mixed media; New Quay local clay, steel, palm leaves, string, and cotton{" "}
        <br />
        2020
      </p>
    </div>
    <div className="item img">
      <img src="../../../img/clay/holdingasyoumove-1.png" alt="" />
    </div>
    <div className="item img">
      <img src="../../../img/clay/holdingasyoumove-2.png" alt="" />
    </div>
  </ModalContent>
)

const NewQuayClay = () => (
  <ModalContent col={2}>
    <div className="item text">
      <h3 className="subheader">Local coastal ceramics</h3>
      <p className="content">
        New Quay, Wales
        <br />
        Purple glaze on New Quay clay
        <br />
        2020
      </p>
    </div>
    <div className="item img">
      <img src="../../../img/clay/newquayclay-1.png" alt="" />
    </div>
  </ModalContent>
)

const Sanctuary = () => (
  <ModalContent>
    <div className="item text">
      <h3 className="subheader">Local coastal ceramics</h3>
      <p className="content">
        New Quay local clay
        <br />
        2020
        <br />
        <br />A series of hand-sized pieces of local clay, moulded and burnished
      </p>
    </div>
    {[1, 2, 3, 4, 5, 6].map(i => (
      <Item bg="none">
        <img src={`../../../img/clay/sanctuary-${i}.png`} alt="" />
      </Item>
    ))}
  </ModalContent>
)

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tab, setTab] = useState(1)

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
          {tab === 1 && <ClayFilm />}
          {tab === 2 && <Horizon />}
          {tab === 3 && <Sanctuary />}
          {tab === 4 && <Drip />}
          {tab === 5 && <HoldingAsYouMove />}
          {tab === 6 && <NewQuayClay />}
        </Modal>
      </StyledClayPage>
    </Layout>
  )
}
