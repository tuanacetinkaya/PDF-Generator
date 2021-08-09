import './App.css';
import ModalButton from'./components/ModalButton.js'
import { Route } from 'react-router-dom'

function App() {

  return (
    <div className="container">
      <Route path='/' exact>
      <header className="App-header">
        <h1>WriteMyLetter</h1>
        <h3>PDF Letter Generator</h3>
        <p>Please Select a Template</p>
      </header>
      <div>
      <ModalButton letterName='Cover Letter for Internal Position' imageFile='internalposition' />
      <ModalButton letterName='Promotion Acceptance Letter' imageFile='acceptance' />
      <ModalButton letterName='Congratulation Letter for Promotion' imageFile='congarts' />
      <ModalButton letterName='Thank You Letter for Promotion' imageFile='thankYou' />
      <ModalButton letterName='Letter of Intent for Promotion ' imageFile='intent' />
      </div>
      </Route>
    </div>
  );
}

export default App;
