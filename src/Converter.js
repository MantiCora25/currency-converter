import "./css/Converter.css"

function Converter(props) {

    function input1Change () {
        const currencyInput1 = document.querySelector('#input1');
        const currencyInput2 = document.querySelector('#input2');
        const amountInput1 = document.querySelector('#amount1');
        const amountInput2 = document.querySelector('#amount2');

        if(currencyInput1.value === "USD" && currencyInput2.value === "UAH") {
            let sum = amountInput1.value * props.usd;
            amountInput2.value = sum.toFixed(2);
        } else if(currencyInput1.value === "EUR" && currencyInput2.value === "UAH") {
            let sum = amountInput1.value * props.eur;
            amountInput2.value = sum.toFixed(2);
        } else if(currencyInput1.value === "UAH" && currencyInput2.value === "USD") {
            let sum = amountInput1.value / props.usd;
            amountInput2.value = sum.toFixed(2);
        }else if(currencyInput1.value === "UAH" && currencyInput2.value === "EUR") {
            let sum = amountInput1.value / props.eur;
            amountInput2.value = sum.toFixed(2);
        }else if(currencyInput1.value === "USD" && currencyInput2.value === "EUR") {
            let sum = amountInput1.value * props.usd / props.eur;
            amountInput2.value = sum.toFixed(2);
        }else if(currencyInput1.value === "EUR" && currencyInput2.value === "USD") {
            let sum = amountInput1.value * props.eur / props.usd;
            amountInput2.value = sum.toFixed(2);
        }else if(currencyInput1.value ===  currencyInput2.value) {
            amountInput2.value = amountInput1.value;
        }   
    }    

    function input2Change () {
        const currencyInput2 = document.querySelector('#input1');
        const currencyInput1 = document.querySelector('#input2');
        const amountInput2 = document.querySelector('#amount1');
        const amountInput1 = document.querySelector('#amount2');

        if(currencyInput1.value === "USD" && currencyInput2.value === "UAH") {
            let sum = amountInput1.value * props.usd;
            amountInput2.value = sum.toFixed(2);
        } else if(currencyInput1.value === "EUR" && currencyInput2.value === "UAH") {
            let sum = amountInput1.value * props.eur;
            amountInput2.value = sum.toFixed(2);
        } else if(currencyInput1.value === "UAH" && currencyInput2.value === "USD") {
            let sum = amountInput1.value / props.usd;
            amountInput2.value = sum.toFixed(2);
        }else if(currencyInput1.value === "UAH" && currencyInput2.value === "EUR") {
            let sum = amountInput1.value / props.eur;
            amountInput2.value = sum.toFixed(2);
        }else if(currencyInput1.value === "USD" && currencyInput2.value === "EUR") {
            let sum = amountInput1.value * props.usd / props.eur;
            amountInput2.value = sum.toFixed(2);
        }else if(currencyInput1.value === "EUR" && currencyInput2.value === "USD") {
            let sum = amountInput1.value * props.eur / props.usd;
            amountInput2.value = sum.toFixed(2);
        }else if(currencyInput1.value ===  currencyInput2.value) {
            amountInput2.value = amountInput1.value;
        }   
    } 

    return (
      <div className="Converter">
        <h2 className="converter__headline">Convert currencies here</h2>
          <div className="converter-container">
            <div>
                <select id="input1" defaultValue="UAH" className="input" onInput={input2Change}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <input type="number>" id="amount1" className="amount-input" placeholder="Type an amount" onInput={input1Change}></input>
            </div>
            <div>
                <select type="select" id="input2" className="input" defaultValue="USD" onInput={input1Change}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <input type="number>" id="amount2" className="amount-input" placeholder="Type an amount" onInput={input2Change}></input>
            </div>
          </div>
      </div>
    );
  }
  
  export default Converter;