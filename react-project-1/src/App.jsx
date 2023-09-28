import { useState } from "react"
import { Counter, Header, Footer } from "./components"

export default function App() {
  const [name, setName] = useState("Gadiel")

  const changeName = () => {
    const newName = prompt("Ingresa un nuevo nombre")
    setName(newName)
  }

  return (
    <>
      <Header/>
      <h1 className="bg-custom-color">{name}</h1>
      <button onClick={changeName}>Cambiar Nombre</button>
      <hr/>
      <Counter/>
      <Footer/>
    </>
  )
}

