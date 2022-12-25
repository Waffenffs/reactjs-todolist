import React from "react"
import '../App.css'


const Card = ({title, description}) => {


    return(

            <div className="cardContainer">
                <div className="headerContainer">
                    <h1 className="textHeader">To-Do</h1>
                </div>
                <div className="textContainer">
                    <p>{title}</p>
                </div>
                <div className="headerContainer">
                    <h1 className="textHeader">Details</h1>
                </div>
                <div className="textContainer">
                    <p>{description}</p>
                </div>
            </div>
    )
}

export default Card;