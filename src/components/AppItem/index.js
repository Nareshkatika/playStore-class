// Write your code here
import './index.css'

const AppItem = props => {
  const {items1} = props
  const {appName, imageUrl} = items1
  return (
    <li className="listTypeEl">
      <img className="imageEl" alt={appName} src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
