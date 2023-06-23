// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, updateActiveTabId, isActive} = props
  const {displayText, tabId} = eachTabItem

  const isTrue = isActive ? 'active-tab' : ''

  const changeApps = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li onClick={changeApps}>
      <button type="button" className={`tab-button ${isTrue}`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
