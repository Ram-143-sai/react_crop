import {Component} from 'react'
import { Link } from "react-router-dom";
import UserService from './UserService.js';
import './index.css'

class UserComponent extends Component {

    
    constructor(props){
        super(props)
        this.state = { 
            Id :'',
            searchInput:'',
            products:[]
        }
        this.productDelete = this.productDelete.bind(this);
        this.productEdit = this.productEdit.bind(this);
    }

    productDelete(id){
        
        UserService.productDelete(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
   

    onChangeSearchInput = event => {
        this.setState({
          searchInput: event.target.value
        })
      }

      productEdit(id){
        this.setState(
            {
                Id : id
            }
        )
    }

    componentDidMount(){
        UserService.getProducts().then((response) => {
            this.setState({ products: response.data})
        });
        
    }

    render (){
        const {searchInput, products} = this.state
        const searchResults = products.filter(eachProduct =>
            eachProduct.productId.includes(searchInput)
        )
        return (
            <div>
                
                <h1 align="center" className = "text-center"> Products List</h1>
                <div className="search" align="center" style={{padding:40}} >
         <input
            type="search"
            onChange={this.onChangeSearchInput}
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="../addProduct" className="btn btn-primary"><button>addProduct</button></Link>
        </div>
            
                <table align="center" className="table table-info table-sm">
                    <thead>
                        <tr rowSpan={2}>
                            <td colSpan={2}> Product Id</td>
                            <td> Product Name</td>
                            <td> descriptions</td>
                            <td colSpan={2}> price</td>
                            <td colSpan={2}> quantity</td>
                            <td >Update</td>
                            <td>Delete</td>
                        </tr>

                    </thead>
                    <tbody>
                    {searchResults.map(products => 
                                    
                                <tr key = {products.productId}>
                                     <td colSpan={2}> {products.productId}</td>   
                                     <td align="center"><img src={products.imageUrl} alt={products.productName} width="150" height="150"/><br/>{products.productName}</td>   
                                     <td > {products.description}</td>
                                     <td colSpan={2}> {products.price}</td>   
                                     <td colSpan={2}> {products.quantity}</td> 
                                     <td>
                                     <Link to="../ProductEdit" className="btn btn-primary"><button onClick={ () => this.productEdit(products.productId)}>productEdit</button></Link>       
                
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

export default UserComponent