const mirarGanador=(matriz)=>{
    let tipo='';
    for (let x = 0; x < matriz[x].length; x++) {
      for (let y = 0; y < matriz[x].length; y++) {
        if(matriz[x][y]!='cero'){
          tipo=matriz[x][y];
          if((y+3)<matriz[x].length){
            if(
              tipo==matriz[x][y+1] &&
              tipo==matriz[x][y+2] &&
              tipo==matriz[x][y+3]
            ) return tipo
          } if ((x+3)<matriz[x].length) {
              if(
                tipo==matriz[x+1][y] &&
                tipo==matriz[x+2][y] &&
                tipo==matriz[x+3][y]
              ) return tipo
          } else {
            return false
          }
        }
      }
    }
    return false
  }

  export default mirarGanador