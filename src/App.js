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
          letterName="Letter of Recommendation for Employee"
          imageFile="https://cdn03.jotfor.ms/form-templates/screenshots/pdf/425x575_2092854325143053/letter-of-recommendation-for-employee.png"
          form_id="212442121186041"
        />
        <ModalButton
          letterName="Letter of Recommendation for College"
          imageFile="https://cdn03.jotfor.ms/form-templates/screenshots/pdf/425x575_2092594337132055/letter-of-recommendation-for-college.png"
          form_id="212442269393054"
        />
        <ModalButton
          letterName="Letter of Recommendation for Scholarship"
          imageFile="https://cdn03.jotfor.ms/form-templates/screenshots/pdf/425x575_2092863900804056/letter-of-recommendation-for-scholarship.png"
          form_id="212442092555048"
        />
        <ModalButton
          letterName="Professional Letter of Recommendation"
          imageFile="https://cdn01.jotfor.ms/form-templates/screenshots/pdf/425x575_2092522332576053/professional-letter-of-recommendation.png"
          form_id="212441835387055"
        />
        <ModalButton
          letterName="Letter of Recommendation for Student"
          imageFile="https://cdn01.jotfor.ms/form-templates/screenshots/pdf/425x575_2092723899478075/letter-of-recommendation-for-student.png"
          form_id="212442542729051"
        />
      </div>
    </div>
  );
}

export default App;
