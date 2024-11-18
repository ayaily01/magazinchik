  import React from 'react'
  import './index.css'
  import Header from './Components/Header'
  import Footer from './Components/Footer'
  import Items from './Components/Items'
  import Categories from './Components/Categories'

  class App extends React.Component  {
    constructor(props) { 
      super(props)
      this.state = {
        currentItems: [],
        orders: [],
        items: [

          {
            id: 1,
            title:'RL 888 Alligator',
            image:'./img/bag1.jpg',
            hoverImage: './img/bag1hover.jpg',
            desc: "Ralph Lauren",
            category:"Bags",
            price:"14.000"
          },
          {
            id:2,
            title:'Cable-Knit',
            image:'./img/sw1.jpg',
            hoverImage: './img/sw1hover.jpg',
            desc: "Polo Ralph Lauren",
            category:"Sweaters",
            price:"198.00"
            },
            {
              id:3,
              title:'Xl Straight Jeans',
              image:'./img/jeans1.jpg',
              hoverImage: './img/jeans1hover.jpg',
              desc: "Levi's",
              category:"Jeans",
              price:"108.00"
              },
              {
                id:4,
                title:'Welington',
                image:'./img/bag2.jpg',
                hoverImage: './img/bag2hover.jpg',
                desc: "Ralph Lauren",
                category:"Bags",
                price:"3200.00"
              },
              {
                id:5,
                title:'Magie bag',
                image:'./img/bag3.jpg',
                hoverImage: './img/bag3hover.jpg',
                desc: "The Coccinelle Magie",
                category:"Bags",
                price:"345.00"                
              },
              {
                id:6,
                title:'GG Marmont mini',
                image:'./img/bag4.jpg',
                hoverImage: './img/bag4hover.jpg',
                desc: "GUCCI",
                category:"Bags",
                price:"20000.00"
                
              },
              {
              id:7,
              title:'Button mock-neck',
              image:'./img/sw2.jpg',
              hoverImage: './img/sw2hover.jpg',
              desc: "Nautica",
              category:"Sweaters",
              price:"25.44"
              },
              {
                id:8,
                title:'Jersey with Web',
                image:'./img/sw3.jpg',
                hoverImage: './img/sw3hover.jpg',
                desc: "GUCCI",
                category:"Sweaters",
                price:"12000.00"
              },
              {
                id:9,
                title:'Cable-Knit V-Neck',
                image:'./img/sw4.jpg',
                hoverImage: './img/sw4hover.jpg',
                desc: "Polo Ralph Lauren",
                category:"Sweaters",
                price:"198.00"
              },
              {
                id:10,
                title:'High-Rise Crop',
                image:'./img/jeans2.jpg',
                hoverImage: './img/jean2hover.jpg',
                desc: "Polo Ralph Lauren",
                category:"Jeans",
                price:"268.00"
              },
              {
                id:11,
                title:'Mid-rise straight',
                image:'./img/jeans3.jpg',
                hoverImage: './img/jeans3hover.jpg',
                desc: "Nautica",
                category:"Jeans",
                price:"55.60"
              },
              {
                id:12,
                title:'A-line midi skirt',
                image:'./img/skirt1.jpg',
                hoverImage: './img/skirt1hover.jpg',
                desc: "Nautica",
                category:"Skirts",
                price:"39.80"
              },
              {
                id:13,
                title:'Knife-Pleated',
                image:'./img/skirt2.jpg',
                hoverImage: './img/skirt2hover.jpg',
                desc: "Polo Ralph Lauren",
                category:"Skirts",
                price:"798.00"
              },
              {
                id:14,
                title:'Embroidered GG',
                image:'./img/skirt3.jpg',
                hoverImage: './img/skirt3hover.jpg',
                desc: "GUCCI",
                category:"Skirts",
                price:"27000.00"
              },
              {
                id:15,
                title:'Xl Straight',
                image:'./img/jeans4.jpg',
                hoverImage: './img/jeans4hover.jpg',
                desc: "Levi's",
                category:"Jeans",
                price:"108.00"
              },
              {
                id:16,
                title:'Jersey hooded',
                image:'./img/sw5.jpg',
                hoverImage: './img/sw5hover.jpg',
                desc: "GUCCI",
                category:"Sweaters",
                price:"25000.00"
              },
              {id:17,
              title:'2day Signature Large',
              image:'./img/bag5.jpg',
              hoverImage: './img/bag5hover.jpg',
              desc: "Coccinelle",
              category:"Bags",
              price:"435.00"
              },
              { id:18,
                title:'Icon Skirt',
                image:'./img/skirt4.jpg',
                hoverImage: './img/skirt4hover.jpg',
                desc: "Levi's",
                category:"Skirts",
                price:"69.50"
                },
                {
                  id:19,
                  title:'Puffer jacket',
                  image:'./img/coat1.jpg',
                  hoverImage: './img/coat1hover.jpg',
                  desc: "Nautica",
                  category:"Coats",
                  price:"49.99"
                },
                {
                  id:20,
                  title:'Velvet-Topcolla',
                  image:'./img/coat2.jpg',
                  hoverImage: './img/coat2hover.jpg',
                  desc: "Polo Ralph Lauren",
                  category:"Coats",
                  price:"898.00"
                },
                {
                  id:21,
                  title:'Floral crêpe',
                  image:'./img/coat3.jpg',
                  hoverImage: './img/coat3hover.jpg',
                  desc: "GUCCI",
                  category:"Coats",
                  price:"30000.00"
                },
     
      ]
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    
  }
  render(props)
   {
        return (
      <div className='Wrapper'>
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder} onCount = {this.incrementCount}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

        <Footer />

      </div>
    )
  }


  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el =>
      el.id !== id
    )})
  }
  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    this.setState({orders: [...this.state.orders,item]})
  }
  chooseCategory(category) {
    if (category ==='all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems:this.state.items.filter(el => el.category === category)})
  }
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
}
  
    export default App

    