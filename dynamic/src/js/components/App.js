import React, {useState} from "react"

import data from "./data.json"

import Loaders from "./Loaders"

import logo from "../../images/platzi.png"
import video from "../../video/que-es-core.mp4"

import "../../less/less.less"
import "../../sass/sass.scss"
import "../../stylus/stylus.styl"

function App(props){
    const [loaderState, setLoaderState] = useState([])

    async function handleClick(){
        setLoaderState(data.loaders)
        const { alerta } = await import("./alert.js")
        alert("funciono el dynamic import")
    }

    return (
        <div>
            <div>
                <p className="less" >esto es less</p>
                <p className="sass" >esto es sass</p>
                <p className="stylus">esto es stylus</p>
                <p className="post-css">esto es postcss</p>
            </div>
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