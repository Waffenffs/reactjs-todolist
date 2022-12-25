import React from "react"
import { useState } from "react"
import Nav from "./components/Nav"
import Content from "./components/Content"
import Card from "./components/Card"


const App = () => {
  
  const [toDoList, setToDoList] = useState([])

  const toDoHandler = (todo) => {
    setToDoList(prevToDo => [...prevToDo, todo])
  }

  const cardInstances = toDoList.map(data => {
    return <Card 
      title={data.title}
      description={data.description}
    />
  })


  return(
    <div>
      <Nav />
      <main>
        <div className="cards">
          {cardInstances}
        </div>
        <Content 
          handler={toDoHandler}
        />
      </main>
    </div>
  )
}

export default App;