"use client";

import { useState } from "react"

const Tablero = (props) =>{
    
    return (
        props.matriz.map((x, xi)=>{
            return (
                <div>
                    {x.map((y, yi)=>{
                        const clase="casillas "+y
                        if(xi==0){
                            return <button className={clase} onClick={()=>props.click(xi,yi)}></button>
                        } else {
                            return <button className={clase}></button>
                        }
                    })}
                </div>
                
            )
        })
    )
}

export default Tablero;