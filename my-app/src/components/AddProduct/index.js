import React, { Component } from 'react'
import UserService from '../products/UserService.js';

class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            productId: '',
            productName: '',
            description: '',
            imageUrl: '',
            quantity:'',
            price:''
        }
        this.changeproductId= this.changeproductId.bind(this);
        this.changeproductName = this.changeproductName.bind(this);
        this.changequantity = this.changequantity.bind(this);
        this.changeprice = this.changeprice.bind(this);
        this.changeimageUrl= this.changeimageUrl.bind(this);
        this.changedescription = this.changedescription.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        return;
            
            
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {productId:this.state.productId,productName: this.state.productName, description: this.state.description, quantity: this.state.quantity,price: this.state.price,imageUrl: this.state.imageUrl};
        console.log('product => ' + JSON.stringify(product));

    
            UserService.addProduct(product).then(res =>{
                this.props.history.push('/admin');
            });
       
    }

    changeproductId= (event) => {
        this.setState({productId: event.target.value});
    }
    
    changeproductName= (event) => {
        this.setState({productName: event.target.value});
    }

    changequantity= (event) => {
        this.setState({quantity: event.target.value});
    }

    changeimageUrl= (event) => {
        this.setState({imageUrl: event.target.value});
    }
    changeprice= (event) => {
        this.setState({price: event.target.value});
    }
    changedescription= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/admin');
    }


    render() {
        return (
            <div>
                <h1 align="center" className = "text-center">Enter Product Details</h1>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> product Name: </label>
                                            <input placeholder="product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeproductName} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> product Id: </label>
                                            <input placeholder="product Id" name="productId" className="form-control" 
                                                value={this.state.productId} onChange={this.changeproductId} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> description: </label>
                                            <input placeholder="description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changedescription} />
                                        </div>
                                        <div className = "form-group">
                                            <label> imageUrl: </label>
                                            <input placeholder="imageUrl" name="imageUrl" className="form-control" 
                                                value={this.state.imageUrl} onChange={this.changeimageUrl} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> quantity: </label>
                                            <input placeholder="quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changequantity} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> price: </label>
                                            <input placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changeprice} required/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddProduct