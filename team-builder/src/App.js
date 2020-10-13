import React, {useState} from 'react';
import {formValues, newForm} from './components/Form';
import {v4 as uuid} from 'uuid'
import './App.css';



const initialFriends = [
  {id: uuid(), name: 'Throckmorton', email:'sk8tercousin@hautmail.com', role: ''},
  {id: uuid(), name: 'Hue Janus', email:'HueJ@hautmail.com', role: ''},
  {id: uuid(), name: 'Phil Mckracken', email:'Philcrack@hautmail.com', role: ''},
]
function App() {

  const [friends, setFriends] = useState(initialFriends)   
  const [nameValue, setNameValue] = useState('')

  const updateForm =(inputName, inputValue)=> {
    setFormValues({
      ...formValues, [inputName]: inputValue,
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <form id ='theform'>
          <label for= 'name'> Name </label>
        <input 
        id = 'name' 
        name = 'name'
        value = {nameValue}/>

        <label for= 'email'>Email </label>
        <input id = 'email' email = 'email'/>

        <label for= 'role'> Role </label>
        <input id = 'role' role = 'role'/>

        <button type = 'submit'>Submit</button>
        </form>
        {friends.map(fr => <div key = {fr.id}>{fr.name} {fr.email}</div>)
        }
      </header>
    </div>
  );
}

export default App;
