import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {itemDetail} = props
  const {itemDetails} = itemDetail
  const {id, thumbnailUrl, videoUrl, categoryId} = itemDetails
  console.log(id, thumbnailUrl, videoUrl, categoryId)
  const overlayStyles = {
    backgroundColor: '#ffff',
  }

  return (
    <Popup
      modal
      trigger={
        <div type="button" className="trigger-button">
          <img src={thumbnailUrl} alt="thumbnail" />
        </div>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <>
          <div className="video-container">
            <h1 className="heading">Video Player</h1>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
          <button
            data-testid="closeButton"
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
