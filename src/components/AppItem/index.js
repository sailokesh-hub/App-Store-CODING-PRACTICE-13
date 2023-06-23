// Write your code here
import './index.css'

const AppItem = ({eachAppItem}) => (
  <li className="app-item">
    <img src={eachAppItem.imageUrl} className="img" alt={eachAppItem.appName} />
    <p className="para">{eachAppItem.appName}</p>
  </li>
)

export default AppItem
