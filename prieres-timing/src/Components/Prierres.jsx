// import React from 'react'
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Prierre from './Prierre';
import Fajr from '../assets/Images/fajr.jpg';
import Duhr from '../assets/Images/Duhr.jpg';
import Asr from '../assets/Images/Asr.jpg';
import Maghreb from '../assets/Images/Maghreb.jpg';
import Isha from '../assets/Images/Isha.jpg';
import axios from 'axios';
import { useState, useEffect  } from 'react';




export default function Prierres() {
  const [city,setCity]=useState("Marseille");


  useEffect(()=>{ 
    axios.get(`https://api.aladhan.com/v1/timingsByCity/29-01-2025?country=FR&city=${city}`)
    .then((response)=>{
      setTimings(response.data.data.timings);
    })

  },[city])
  const [timings,setTimings] = useState({
    Fajr:"04:20",
    Dhuhr:"12:20",
    Asr:"15:20",
    Sunset:"18:20",
    Isha:"20:20", 
  });
  // https://api.aladhan.com/v1/timingsByCity/29-01-2025?country=FR&city=marseille;

  const handleChange = (e) => {
    setCity(e.target.value);

  };
  return (
    <>
    
    <Grid container> 
          <Grid size={6} >

            <div>

            <h2>
                09 septembre 2023 | 4:30 
            </h2>

              <h1>
               {city}
              </h1>

            </div>
             


          </Grid>

          <Grid size={6} >

            <div>

               <h2>
                  Reste jusqu'au prochaine priere Asr 
                </h2>

                <h1>
                  00:10:30
                </h1>

            </div>

               


          </Grid>       


    </Grid>
    <Divider style={{backgroundColor:"white",opacity:"0.1"}}/>

    <Stack direction="row" justifyContent={"space-around "} style={{marginTop:"50px"}}> 

    <Prierre name="Fajr" time={timings.Fajr} image={Fajr}/>  
    <Prierre name="Dhuhr" time={timings.Dhuhr}image={Duhr}/>  
    <Prierre name="Asr" time={timings.Asr}image={Asr}/>  
    <Prierre name="Maghreb" time={timings.Sunset}image={Maghreb}/>  
    <Prierre name="Isha" time={timings.Isha}image={Isha}/>  


    </Stack>


   <Stack direction="row" justifyContent={"center"} style={{marginTop:"40px"}}>
      <FormControl style={{width:"20%"}}>
            <InputLabel id="demo-simple-select-label">
            <span style = {{color:"white"}}>
              Ville
            </span>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Marseille">Marseille</MenuItem>
              <MenuItem value="Paris">Paris</MenuItem>
              <MenuItem value="Bordeaux">Bordeaux</MenuItem>
            </Select>
        </FormControl>
    
    </Stack> 

    </>
   
  )
}

