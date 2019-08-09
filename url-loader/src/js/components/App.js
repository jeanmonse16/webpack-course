import React, {useState} from "react"
import data from "./data.json"
import Loaders from "./Loaders"
import logo from "../../images/platzi.png"
import video from "../../video/que-es-core.mp4"

function App(props){
    const [loaderState, setLoaderState] = useState([])

    function handleClick(){
        setLoaderState(data.loaders)
    }

    return (
        <div>
            <h1>Hola soy jeanpi</h1>
            <div>
                <img src={logo} width={40} ></img><br />
                <video src={video} width={360} controls poster={logo}></video>
            </div>
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