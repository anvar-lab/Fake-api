import React from "react";
import "./styles.scss";


class Apitwo extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json =await res.json();
        this.setState({data:json})
    }
    render(){
        return(
            <div className="book-container">
                {
                    this.state.data.map(({id, email,body,name})=>(
                        <div className="book-mini-box" key={id}>
                            <div className="book-name">
                                {name}
                            </div>
                            <h1>{email}</h1>
                            <h1>{body}</h1>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default  Apitwo