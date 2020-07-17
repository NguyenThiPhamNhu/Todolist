import React, { Component } from 'react';
import ProductItem from './components/ProductItem';




class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "Ukulele sprano",
          price: 600.000,
          image: "https://pics.mercatinomusicale.com/p_m/36/36/5253636_11585657355.jpg",
          status: true
        },
        {
          id: 2,
          name: "Ukulele sprano",
          price: 900.000,
          image: "https://pics.mercatinomusicale.com/p_m/36/36/5253636_11585657355.jpg",
          status: true
        },
        {
          id: 3,
          name: "Ukulele sprano",
          price: 200.000,
          image: "https://pics.mercatinomusicale.com/p_m/36/36/5253636_11585657355.jpg",
          status: true
        },
        {
          id: 4,
          name: "Ukulele tenor",
          price: 200.000,
          image: "https://pics.mercatinomusicale.com/p_m/36/36/5253636_11585657355.jpg",
          status: true
        }

      ],
      cart: [],
    }
  }
  removeProduct = (id) => {
    const arrProduct = this.state.products;
    arrProduct.splice(id, 1);
    this.setState({ products: arrProduct });

  }

  onClickedItem(item) {
    const newCart = this.state.cart;
    newCart.push(item);
    return (event) => {
      this.setState({
        cart: newCart
      })
    }

  }


  onAddProduct() {
    alert(this.refs.name.value);
  }
  // local

  // onAddProductLocal(event) {
  //   event.preventDefault();
  //   let title = event.target["title"].value;
  //   let price = event.target["price"].value;
  //   let product = {
  //     title: title,
  //     price: price
  //   }
  //   let products = JSON.parse(loacalStorage.getItem("Isc-products"));
  //   if (!products) {
  //     products = [];
  //   }
  //   products.push(product);
  //   localStorage.setItem("Isc-products", JSON.stringify(products));
  //   displayProducts();
  // }

  // displayProducts() {
  //   let products = JSON.parse(localStorage.getItem("products"));
  //   console.log(products);

  //   let productsDiv = document.getElementById("products");
  //   for (let i = 0; i < products.length; i++) {
  //     let product = document.createElement("div");
  //     let productTitle = document.createElement("h2");
  //     let productPrice = document.createElement("p");

  //     productTitle.innerText = products[i].title;
  //     productPrice.innerText = products[i].price;

  //     product.appendChild(productTitle);
  //     product.appendChild(productPrice);
  //     productsDiv.appendChild(product);


  //   }

  // }
  // local

  render() {

    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result =
          <tr key={index.id}>
            <td>{index}</td>
            <td>{product.name}</td>
            <td>
              {product.price}
            </td>
            <td>
              <button type="button" class="btn btn-info">Edit</button>
            </td>
            <td>
              <button type="button" onClick={this.removeProduct} class="btn btn-info">Remove</button>
            </td>
          </tr>

      }

      return result;


    });





    const products = this.state.products;
    const { cart } = this.state;
    console.log(cart);
    return (
      <div >
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>

        <h2>Vit Guitar Shop</h2>
        <form className="AddProduct" onSubmit={this.onAddProductLocal} >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input width="400" type="text" className="form-control" id="name" placeholder="Enter name" name="name" ref="title" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="price" className="form-control" id="price" placeholder="Enter price" name="price" ref="price" />
          </div>
          <div className="form-group form-check">

          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>



        <div className="App">
          {
            products.length && products.map((item, index) =>
              <ProductItem
                key={index}
                item={item}
                onClick={this.onClickedItem(item)}


              />
            )
          }
          <div>
            {
              cart.map((item) =>





                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                  <div class="thumbnail">
                    <img src={item.image}></img>
                    <div class="caption">
                      <h3>{item.name}</h3>
                      <p>
                        {item.price}
                      </p>
                      <p>
                        <button type="button" class="btn btn-success">Remove</button>

                      </p>
                    </div>

                  </div>


                </div>
              )
            }
            <h1>Total</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Add</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {elements}
              </tbody>
            </table>




            <div class="panel panel-default">
              <div class="panel-body">
                <center><h3>Tap Doan Lo Ship</h3></center>
              </div>
              <div class="panel-footer">
                <center><h3>Copyright by VIT</h3></center>

              </div>
            </div>






          </div>
        </div>

      </div>
    )
  }
}

export default App;