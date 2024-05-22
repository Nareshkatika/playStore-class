// Write your code here
import './index.css'

const TabItem = props => {
  const {items2, NavigateButton} = props
  const {displayText, tabId} = items2

  const Answer = () => {
    NavigateButton(tabId)
  }

  return (
    <li className="listItems">
      <button onClick={Answer} className="buttonEl" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
