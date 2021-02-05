import React from "react";
import "./styles.scss";


class ApiFive extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
        const res =await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await res.json();
        this.setState({data:json});
    }
    render(){
        return(
            <div className="apiFive-box">
                {
                    this.state.data.map(({ id,title, url,thumbnailUrl})=>(
                        <div className="apifive-mini-box" key={id}>
                            <h1>{title}</h1>
                            <img src={url} alt="#"/>
                            <img src={thumbnailUrl} alt="#"/>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default ApiFive;