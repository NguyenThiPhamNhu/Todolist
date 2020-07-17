import React, { Component } from 'react';




class ProductItem extends Component {


    render() {
        const onClick = this.props.onClick;
        return (
            <div>

                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"

                />
                
               
                <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"></link>
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
                
               
                
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                    <div class="thumbnail">
                        <img src={this.props.item.image} alt=""></img>
                        <div class="caption">
                            <h3>{this.props.item.name}</h3>
                            <p>
                            {this.props.item.price}
                            </p>
                            <p>
                               <button type="button" onClick={onClick} class="btn btn-danger">Buy now</button>
                                <a href="#" class="btn btn-default">Detail</a>
                            </p>
                        </div>
                        
                    </div>

                </div>
                

            </div>


        )
    }
}

export default ProductItem;