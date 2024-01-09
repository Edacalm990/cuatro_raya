"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Tablero from './ui/Tablero'
import { useState } from 'react';
import mirarGanador from './funciones/funciones'



export default function Home() {
  
  const [matriz, setMatriz]=useState([[0]]);
  const [jugador, setJugador]=useState('uno')
  const [ganador, setGanador]= useState(false)

  const addMatriz=()=>{
    const array = Array.from({ length: 9 }, (x) => Array(9).fill('cero'));
    setMatriz(array)
    setGanador(false)
  }

  

  const cambiarBoton=(x,y)=>{
    let matAux=matriz.slice()
    for (let index = matAux.length-1; index >0; index--) {
      if(matAux[index][y]=='cero'){
        matAux[index][y]=jugador
        let auxjugador=(jugador=='uno')?'dos':'uno';
        setJugador(auxjugador)
        setMatriz(matAux)
        let aux=mirarGanador(matAux)
        setGanador(aux);
        break;
      }
    }
    
    
  }

  console.log(ganador)
  return (
    <main className={styles.main}>
      {(ganador)
      ?<p>El jugador {ganador} ha ganado</p>
      :<Tablero matriz={matriz} click={(x,y)=>cambiarBoton(x,y)}/>}
      <button onClick={()=>addMatriz()}>Empezar a jugar</button>
    </main>
  )
}
