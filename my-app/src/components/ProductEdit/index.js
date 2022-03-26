import React from 'react';
import UserService from '../products/UserService.js';


class ProductEdit extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            //id: this.props.match.params.id,
            id:'potato',
            products: []
        }
    }

    componentDidMount(){
        UserService.getProducts(this.state).then((response) => {
            this.setState({ products: response.data})
        });
    }

    
    render(){
        const { products,id} = this.state
        const searchResults = products.filter(eachProduct =>
            eachProduct.productId.includes(id)
          )
        return(
            <div>
            <br></br>
            <table align="center" className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Product Id</td>
                            <td> Product Name</td>
                            <td> descriptions</td>
                            <td> price</td>
                            <td> quantity</td>
                            
                        </tr>

                    </thead>
                    <tbody>
                    {searchResults.map(products =>  
                                <tr key = {products.productId}>
                                     <td> {products.productId}</td>   
                                     <td> {products.productName}</td>   
                                     <td> {products.description}</td>
                                     <td> {products.price}</td>   
                                     <td> {products.quantity}</td> 
                          </tr>
                          )}
                    </tbody>
                </table>
                    
        </div>
        )
    }
}

export default ProductEdit