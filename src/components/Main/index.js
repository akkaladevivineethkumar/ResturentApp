import {Component} from 'react'
import NavBar from '../NavBar'
import NavList from '../NavList'
import CategoryItems from '../CategoryItems'
import './index.css'

class Main extends Component {
  state = {
    data: [],
    activeCategory: '11',
  }

  componentDidMount() {
    this.GetData()
  }

  GetData = async () => {
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const res = await response.json()
      this.setState({
        data: res[0],
      })
    }
  }

  handleCategoryClick = category => {
    this.setState({
      activeCategory: category,
    })
  }

  render() {
    const {data, activeCategory} = this.state
    const activeCategoryData = data?.table_menu_list?.find(
      item => item.menu_category_id === activeCategory,
    )
    return (
      <>
        <NavBar name={data.restaurant_name} />
        <ul className="ul">
          {data.table_menu_list?.map(items => (
            <NavList
              isActive={activeCategory === items.menu_category_id}
              onClick={() => this.handleCategoryClick(items.menu_category_id)}
              eachItem={items}
              key={items.menu_category_id}
            />
          ))}
        </ul>
        {activeCategoryData?.category_dishes?.map(items => (
          <CategoryItems gotActiveCategory={items} key={items.dish_id} />
        ))}
      </>
    )
  }
}

export default Main
