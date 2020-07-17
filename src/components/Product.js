import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    // this.onAddProduct = this.onAddProduct.bind(this);

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
        }

      ],
      cart: [],
      
     
      isActive: true
    };
    this.onSetState = this.onSetState.bind(this);
  }

  
  onAddToCart() {
    alert('Buy:' + this.props.children + '-' + 'Price:' + this.props.price + '-' + 'Successful !');

  }
  
  onClick() {
    alert("Buy now!");
  }
  onAddProduct(){
    alert(this.refs.name.value);
  }
  onAddProductToCart(id){
    const newCart = this.state.cart;
    newCart.push(item);
    return(event) =>{
      this.setState({
        cart: newCart
      })
    }


    

    alert('Buy:' + this.props.children + '-' + 'Price:' + this.props.price + '-' + 'Successful !'); 
  }




  onSetState() {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false
      });
    } else {
      this.setState({
        isActive: true
      });


    }
  }
  render() {
  
   
   
    // let elements = this.state.products.map((product, index) => {
    //   let result = '';
    //   if (product.status) {
    //     result =
    //       <tr key={index.id}>
    //         <td>{index}</td>
    //         <td>{product.name}</td>
    //         <td>
    //           {product.name}
    //         </td>
    //       </tr>

    //   }

    //   return result;


    // });  
    
    
    

    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"

        />

        <div>
    


          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="thumbnail">
              <img alt={this.props.children} src={this.props.image} />
              <div className="caption">

                <h3>{this.props.children}</h3>

                <p>
                  {this.props.price} VNĐ
                 </p>
                
                <p>

                  <button type="button" class="btn btn-danger" onClick={this.onAddToCart}>Detail</button>
                  <button type="button" class="btn btn-success" onClick={this.onAddToCart}>Buy now</button>


                </p>

              </div>
            </div>
          </div>
        </div>


      
      
        {/* <table className="table table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {elements}
          </tbody>
        </table> */}


        {/* <button type="button" className="btn btn-danger" onClick={this.onSetState}>Active : {this.state.isActive === true ? 'true' : 'false'}</button> */}


      </div>



    );

  }
}
export default Product;
