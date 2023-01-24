import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage} = props
  const {id, thumbnailUrl} = imageDetails

  const changeImage = () => {
    updateImage(id)
  }

  return (
    <li className="list-item">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt="thumbnailAltText"
          className="image-items"
          onClick={changeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
