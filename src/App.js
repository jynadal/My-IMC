import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const interpretations = new Map();

  interpretations.set(16.5, "denutrition ou anorexie");
  interpretations.set(18.5, "maigreur");
  interpretations.set(25, "poids normal");
  interpretations.set(30, "surpoids");
  interpretations.set(35, "obésité modérée");
  interpretations.set(40,"obésité sévère");
  interpretations.set("infinity", "obésité morbide ou massive");


function App() {
	const [ imc, setImc ] = useState(undefined);

	const inputWeight = useRef(null);
	const inputHight = useRef(null);
	//const setImc = useRef(null);

	const handleChange = (evt) => {
		//console.log(inputHight.current.value);

		const weight = inputWeight.current.value;
		const hight = inputHight.current.value;

		if (!weight || !hight) {
			return;
		} else {

      let imcInterpretation = null;



  const imc = ((weight / Math.pow(hight / 100, 2)).toFixed(2));

  interpretations.forEach((interpretation, imcKey) => {
 
  if (!imcInterpretation && imc < imcKey) {
    imcInterpretation = interpretation;
  } 
});

setImc(imc + " " + imcInterpretation);			
		}
	};
	return (
		<div className="App">
			<h1> My IMC </h1>  {' '}
			<form>
				<input
					ref={inputWeight}
					onChange={handleChange}
					name="weight"
					type="number"
					placeholder=" Poids en kg"
          />
				<input ref={inputHight} onChange={handleChange} name="hight" type="number" placeholder=" Taille en cm" />
				<button onChange={handleChange}> Sauver </button> 
			</form>
			 
			<div className="interpretation">
				onChange-- imc XX-- interpretation
      {imc &&  <div>{imc} </div>  }
			</div>
			
			<ul>
				<li> Date XX / XX / XXXX imc interpretation X </li> <li> Date XX / XX / XXXX imc interpretation X </li> 
				
			</ul>
			   
		</div>
	);
}

export default App;
