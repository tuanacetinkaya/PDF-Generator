import ModalButton from "./components/ModalButton.js";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>WriteMyLetter</h1>
        <h3>PDF Letter Generator</h3>
        <p>Please Select a Template</p>
      </header>
      <div>
        <ModalButton
          letterName="Employment Verification Letter"
          imageFile="https://cdn03.jotfor.ms/form-templates/screenshots/pdf/425x575_2090451228713049/employment-verification-letter-template.png"
          form_id="212375188863061"
        />
        <ModalButton
          letterName="Letter of Intent for Promotion "
          imageFile="https://files.jotform.com/jotformapps/letter-of-intent-for-promotion-833347528660913a7e24399c9535cfbb.png?v=1629459905"
          form_id="212354411708045"
        />
        <ModalButton
          letterName="Promotion Acceptance Letter"
          imageFile="https://cdn01.jotfor.ms/form-templates/screenshots/pdf/425x575_2092380525923055/promotion-acceptance-letter.png"
          form_id="212354032937048"
        />
        <ModalButton
          letterName="Congratulation Letter for Promotion"
          imageFile="https://cdn01.jotfor.ms/form-templates/screenshots/pdf/425x575_2092512041923045/congratulation-letter-for-promotion.png"
          form_id="212354670016044"
        />
        <ModalButton
          letterName="Thank You Letter for Promotion"
          imageFile="https://cdn01.jotfor.ms/form-templates/screenshots/pdf/425x575_2092651090963057/thank-you-letter-for-promotion.png"
          form_id="212354918017050"
        />
      </div>
    </div>
  );
}

export default App;
