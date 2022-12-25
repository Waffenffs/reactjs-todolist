import React, { useState } from "react"
import '../App.css'
import uuid from 'react-uuid'


const Content = ({handler, nextFeature}) => {
    const [toDoData, setToDoData] = useState({
        title: "",
        description: "",
      })

    const handleChange = (event) => {
        const {name, value} = event.target
        setToDoData(prevData => ({
            ...prevData,
            [name]: value,
            key: {uuid}
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(toDoData.title && toDoData.description){
            handler({...toDoData})

            // resetting input
            setToDoData(prevData => ({
                ...prevData,
                title: "",
                description: "",
            }))
        }
    }

    return(
        <div className="contentContainer">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1 className="inputHeader">Title</h1>
                    <input 
                        type="text"
                        placeholder="Name of to do..."
                        className="form--Input"
                        value={toDoData.title}
                        name="title"
                        onChange={handleChange}
                    />
                    <h1 className="inputHeader">Description</h1>
                    <textarea 
                        type="text"
                        placeholder="Description"
                        className="form--Input"
                        value={toDoData.description}
                        name="description"
                        onChange={handleChange}
                    />
                    <button className="form--Submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Content;