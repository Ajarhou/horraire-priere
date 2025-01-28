
import './App.css';
import Prierres from './Prierres.jsx';
import { Container } from '@mui/material';
    

function App() {
  

  return (
    
      <div style={{
        display:"flex",
        justifyContent:"center",
        width:"100vw",
        }}>
      
       <Container maxWidth="xl"> 

           <Prierres/>                

       </Container>
     
      </div>
    
      
  )
}

export default App
