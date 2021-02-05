import React from "react";
import "./styles.scss";




class ApiThree extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
        const res =await fetch('https://fakestoreapi.com/products/category/jewelery');
        const json = await res.json();
        this.setState({data:json});
    }
    render(){
        return(
            <div className="apiThee-box">
                {
                    this.state.data.map(({ id,title, price, category,image, description,})=>(
                        <div className="apithree-mini-box" key={id}>
                            <h1>{title}</h1>
                            <div className="description">{description}</div>
                            <h1>{category}</h1>
                            <h1>{price}</h1>
                            <img src={image} alt="#"/>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default ApiThree