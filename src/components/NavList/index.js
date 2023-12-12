import './index.css'

const NavList = props => {
  const {eachItem, isActive, onClick} = props

  return (
    <li className="li">
      <button
        type="button"
        className={isActive ? 'BtnActive' : 'BtnInactive'}
        onClick={onClick}
      >
        {eachItem?.menu_category}
      </button>
    </li>
  )
}
export default NavList
