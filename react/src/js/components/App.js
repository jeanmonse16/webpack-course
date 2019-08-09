import React, {useState} from "react"
import data from "./data.json"
import Loaders from "./Loaders"

function App(props){
    const [loaderState, setLoaderState] = useState([])

    function handleClick(){
        setLoaderState(data.loaders)
    }

    return (
        <div>
            <h1>Hola soy jeanpi</h1>
            <ul>
                {
                    loaderState.map(item => <Loaders {...item} key={item.id} />)
                }
            </ul>
            <button onClick={handleClick} >presiona aquí</button>
        </div>
    )
}

export default App