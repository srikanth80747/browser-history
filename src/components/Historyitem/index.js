import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="search-card-container">
      <div className="timecard">
        <p className="timestamp">{timeAccessed}</p>
        <div className="imgcard">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="titlecard">
            <p className="title">{title}</p>
            <p className="domainurl">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
