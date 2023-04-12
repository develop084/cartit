import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import axios from 'axios'
function App() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit =()=>{
    
    axios.post('http://localhost:8000/api/v1/register', {
      name: name,
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="App">
     <NavBar /> 
     <form onSubmit={(e) =>{ 
      e.preventDefault()
      handleSubmit()}
      }>
     <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='name'/>
     <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='email'/>
     <input onChange={(e)=> setPassword(e.target.value)} type="text" placeholder='password'/>
     <button type='submit'>Send</button>
     </form>
    </div>
  )
}

export default App
