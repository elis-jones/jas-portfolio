import React, { useState } from "react"
import Layout from "../../components/Layout"
import { StyledClayPage, ModalContent, Video } from "../clay"
import Modal from "react-modal"
import ReactPlayer from "react-player"

const Film = ({ url, header, text }) => (
  <ModalContent col={2}>
    <div className="item text padded">
      <h3 className="subheader">{header}</h3>
      <p className="content ">{text}</p>
    </div>
    <Video>
      <ReactPlayer
        className="player"
        playing
        url={url}
        width="100%"
        height="100%"
      />
    </Video>
  </ModalContent>
)

const film = [
  {
    header: "'Take Me With You'",
    text: (
      <>
        32sec <br />
        iPhone Video
        <br />
        2019
      </>
    ),
    url: "https://vimeo.com/383544770",
  },
  {
    header: "'Framed Air'",
    text: (
      <>
        38sec <br />
        iPhone Video
        <br />
        2019
      </>
    ),
    url: "https://vimeo.com/383544650",
  },
  {
    header: "'Untitled 2'",
    text: (
      <>
        2min 7sec <br />
        2019
      </>
    ),
    url: "https://vimeo.com/368828077",
  },
  {
    header: "'Untitled'",
    text: (
      <>
        7min 39sec
        <br />
        2019
      </>
    ),
    url: "https://vimeo.com/368828358",
  },
  {
    header: "'Into The Tide'",
    text: (
      <>
        2min 52sec
        <br />
        2019
      </>
    ),
    url: "https://vimeo.com/425478338",
  },
]

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tab, setTab] = useState(1)

  return (
    <Layout>
      <StyledClayPage>
        <h2 className="header">Film & Other</h2>
        <section className="content">
          <div className="column">
            <p className="statement">
              With film, I attempt to capture/observe the different
              spatiotemporalities that are not human, as well as the crossover
              of temporalities between objects. Often the objects I observe are
              what Timothy Morton describe as ‘Hyperobjects’; these are things
              that are ‘massively distributed through space and time’.
            </p>
          </div>
          <div className="column">
            <div className="images-container">
              {[1, 2, 3, 4, 5].map(i => (
                <img
                  src={`../../../img/filmandother/filmandother-index-${i}.png`}
                  key={`film-image-${i}`}
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
          onRequestClose={() => setIsModalOpen(false)}
          ariaHideApp={false}
        >
          {<Film {...film[tab - 1]} />}
        </Modal>
      </StyledClayPage>
    </Layout>
  )
}
