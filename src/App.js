import React, {useState} from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({
    weight: undefined,
    hight: undefined,
    imc: '123'
  })

  const handleChange = (evt) => {

    const weight =document.querySelector('[name=weight]').value;
    const hight =document.querySelector('[name=hight]').value;

    if (!weight || !hight) {
      return;
    }else{
      console.log(weight, hight);
    }

  }
  return (
    <div className="App">
      <h1>My IMC</h1>
        <form>
          <input onChange={handleChange} name="weight" type="number" placeholder=" Poids en kg" />
          <input onChange={ handleChange} name="hight" type="number" placeholder=" Taille en m"/>
          <button>Sauver</button>
        </form>

        <div className="interpretation">
          <p>onChange --> imc XX --> interpretation</p>

          <div>
          {state.imc && state.imc}
          </div>
        </div>

        


      <ul>
        <li>Date XX/XX/XXXX imc  interpretation X</li>
        <li>Date XX/XX/XXXX imc  interpretation X</li>
      </ul>
    </div>

  );
}

export default App;
