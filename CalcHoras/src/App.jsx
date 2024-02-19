import { useState } from 'react'
import './App.css'

function App() {
  

  const [hi, setHi] = useState();
  const [mi, setMi] = useState();
  const [hf, setHf] = useState();
  const [mf, setMf] = useState();
  const [resultado, setResultado] = useState("resultado")

  const soma = () => {
    let somahora = Number(hi.value) + Number(hf.value);
    let somamin = Number(mi.value) + Number(mf.value);
    while (somamin > 59){
        somamin -= 60;
        somahora ++;
    }
    if (somamin < 10){
        somamin = "0"+somamin
    }
    if (somahora < 10){
        somahora = "0"+somahora
    }
    setResultado (somahora + ":" + somamin)
  }

  const sub = () => {
    let totalminini = hi.value*60 + Number(mi.value);
    let totalminfin = hf.value*60 + Number(mf.value);
    let totalmin = totalminini - totalminfin;
    let subhora = 0
    if(totalmin < 0){
        totalmin = totalmin * -1;
    }
    while(totalmin > 59){
        totalmin -= 60
        subhora ++;
    }
    if (totalmin < 10){
        totalmin = "0"+totalmin
    }
    if (subhora < 10){
        subhora = "0"+subhora
    }
    if (subhora < 0){
        subhora = subhora * -1;
    }
        

    setResultado (subhora + ":" + totalmin)
  }

  return (
    <>
    <h1>Calculadora</h1>
    <div class="Stevan">
        <h3>Escolha os horários que deseja calcular</h3>
        <input type="number" value={hi} onChange={(e) => setHi(e.target.value)} placeholder="Hora Inicial"/> &nbsp; : &nbsp;
        <input type="number" value={mi} onChange={(e) => setMi(e.target.value)} placeholder="Minuto inicial"/><br/>
        <input type="number" value={hf} onChange={(e) => setHf(e.target.value)} placeholder="Hora final"/> &nbsp; : &nbsp;
        <input type="number" value={mf} onChange={(e) => setMf(e.target.value)} placeholder="Minuto final"/><br/><br/>
        <button onclick="soma()">Soma</button> 
        <button onclick="diferenca()">Diferença</button>
        <h3 id="resultado">{resultado}</h3>
    </div>
    
    </>
  )
}

export default App
