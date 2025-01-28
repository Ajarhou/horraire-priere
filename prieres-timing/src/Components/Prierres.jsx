// import React from 'react'
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Prierre from './Prierre';
import Fajr from '../assets/Images/fajr.jpg';
import Duhr from '../assets/Images/Duhr.jpg';
import Asr from '../assets/Images/Asr.jpg';
import Maghreb from '../assets/Images/Maghreb.jpg';
import Isha from '../assets/Images/Isha.jpg';




export default function Prierres() {
  return (
    <>
    
    <Grid container> 
          <Grid size={6} >

            <div>

            <h2>
                09 septembre 2023 | 4:30 
            </h2>

              <h1>
                Marseille
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

    <Prierre name="Fajr" time="04:10" image={Fajr}/>  
    <Prierre name="Duhr" time="12:25"image={Duhr}/>  
    <Prierre name="Asr" time="15:35"image={Asr}/>  
    <Prierre name="Maghreb" time="18:25"image={Maghreb}/>  
    <Prierre name="Isha" time="20:42"image={Isha}/>  


    </Stack>

    </>
   
  )
}

