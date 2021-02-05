import React from "react";
import "./index.scss";
import axios from "axios";



class Api1 extends React.Component{


    constructor(){
        super()
        this.state ={
            data:[]
        }
    }


    async componentDidMount(){
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        this.setState({data:json});
    }
    render(){
        return(
            <div className="shop-box">
                <div className="shop-container">
                    {this.state.data.map(({id,title,price,description,image})=>(
                        <div className="shop-mini-box" key={id}>
                            <h1 className="card-name">{title}</h1>
                            <img className="card-img" src={image} alt="#"/>
                            <h6 className="card-prce">{price}</h6>
                            <p className="card-prce">{description}</p>
                        </div>
                    ))
                    }   
                </div>
            </div>
        )
    }
}

export default Api1