import {Component} from 'react'
import UserService from "../products/UserService"
import Header from "../Header"


class Cart extends Component{
    constructor(props){
        super(props)
        this.state = { 
            Id :'',
            quantity:'1',
            products:[]
        }
        this.productDelete = this.productDelete.bind(this);
    }

    handleChange = event => {
        this.setState({
          quantity: event.target.value
        })
      }
      productDelete(id){
        
        UserService.deleteCartProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    componentDidMount(){
        UserService.getCartProducts().then((response) => {
            this.setState({ products: response.data})
        });
    }
    render(){
        const {products} = this.state
        let {quantity} = this.state
        return(

    <div>
        <Header/>
        <div>
            <h1 align="center">Cart Page</h1>
        </div>
        <br/>
        <br/>
        <table align="center" className="table table-info table-sm">
                    <thead>
                        <tr rowSpan={2}>
                            <td > Product Name</td>
                            <td > quantity</td>
                            <td > price</td>
                            <td > Action</td>
                        </tr>

                    </thead>
                    <tbody>
                    {products.map(products => 
                                    
                                <tr key = {products.productId}>
                                     <td > {products.productId}</td>
                                     <td > 
                                     <select id = "dropdown" defaultValue={this.state.selectVal} onChange={this.handleChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    
                                    
                                    </td>   
                                     <td > 
                                         
                                         { quantity * 30 }
                                        
                                    </td> 
                                    <td>
                                    <button  onClick={ () => this.productDelete(products.productId)} className="btn btn-danger">Delete </button>
                                    </td>
                                     
                
                                </tr>
                            )
                        }

                    </tbody>
                </table>
    </div>
)
}
}
export default Cart