import React, {Component} from 'react';

import IconSwitch from './components/IconSwitch';
import CardsView from './components/CardsView';
import ListView from './components/ListView';
import ShopCard from './components/ShopCard';
import ShopItem from './components/ShopItem';

class App extends Component {

  products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];


  cardsLayout = {
    xs: 12,
    sm: 8,
    md: 6,
    lg: 4
  };

  constructor(props) {
    super(props);

    this.state = {
      layout: 'view_module',
      products: this.products,
    };
  }

  switchLayout = () => {
    this.setState({
      layout: (this.state.layout === 'view_module') ? 'view_list' : 'view_module',
      products: this.state.products,
    });
  }

  render() {
    return (
        <div>
          <div className="toolbar">
            <IconSwitch icon={this.state.layout}
                        onSwitch={this.switchLayout}/>
          </div>
          {this.state.layout === "view_module" ? <CardsView layout={this.cardsLayout} cards={this._getShopItems(this.products, true)}/> :
              <ListView items={this._getShopItems(this.products)}/>
          }
          {/*this._renderLayout('view_module')*/}
        </div>
    )
  }

  _getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: "$" + product.price
      };
      if (cardView) {
        return (
            <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
export default App;