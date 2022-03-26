import {Component} from 'react'
import HomeItem from "./HomeItem"
import UserService from "../products/UserService"
import "./index.css"
import Header from "../Header"

class Home extends Component{

        state = { 
            products:[]
        }
    componentDidMount(){
        UserService.getProducts().then((response) => {
            this.setState({ products: response.data})
            
        });
        
    }
    

    render() {
      const {products} = this.state
        console.log(products)
        return (
          <div className="app-container">
            <Header />
        <h1 className="title" align="center">Welcome to E - Mandi</h1><br/><br/>
            <ul className="project-list-container">
              {products.map(productDetails => (
                <HomeItem
                  key={productDetails.productId}
                  productDetails={productDetails}
                />
              ))}
            </ul>
          </div>
        )
      }

}
export default Home