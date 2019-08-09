import "../css/index.css"

import search from "./search"
import render from "./render"


const id = prompt("cual es tu pokemon xd")

search(id)
          .then((data)=>{
              render(data)
          })
          .catch(()=>{
              console.log("error al conectar con la api")
          })

