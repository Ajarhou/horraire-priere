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
import moment from 'moment';
import { useState, useEffect  } from 'react';




export default function Prierres() {
  const cities = [
  {
    id : "01",
    name:'Marseille',
  },
  {
    id : "02",
    name:'Paris',
  },
  {
    id : "03",
    name:'Toulouse',
  },
  {
    id : "04",
    name:'Bordeaux',
  },
  {
    id : "05",
    name:'Nantes',
  },
  {
    id : "06",
    name:'Lyon',
  },
  {
    id : "07",
    name:'Strasbourg',
  },
  {
    id : "08",
    name:'Annecy',
  },
    
  ];
  const [city,setCity]=useState("Marseille");
  const [timings,setTimings] = useState({
    Fajr:"04:20",
    Dhuhr:"12:20",
    Asr:"15:20",
    Sunset:"18:20",
    Isha:"20:20", 
  });
  const [today,setToday]=useState(""); 
  const [nextPrayer,setNextPrayer]=useState("");
  const [remainning,setRemaianing]=useState("");
 


  useEffect(()=>{ 
    axios.get(`https://api.aladhan.com/v1/timingsByCity/29-01-2025?country=FR&city=${city}`)
    .then((response)=>{
      setTimings(response.data.data.timings);
    })

  },[city])
  useEffect(()=>{
    const t = moment();
    setToday(()=>{
      return t.format("MM DO YYYY | h:mm")});
    let interval=setInterval(()=>{

     setUpCountDownTimer();
      
      

    },1000)
    return ()=>{
      clearInterval(interval);
      
      

    }


  },[timings])
   const setUpCountDownTimer=()=>{
    const momentNow = moment();
    let nextPrayer = null;

    if(
      momentNow.isAfter(moment(timings.Fajr,"hh:mm")) &&
      momentNow.isBefore(moment(timings.Dhuhr,"hh:mm"))){

      nextPrayer = "Dhuhr";
      
    }
    else if(
      momentNow.isAfter(moment(timings.Duhr,"hh:mm")) &&
      momentNow.isBefore(moment(timings.Asr,"hh:mm"))){

      nextPrayer = "Asr";
      

    }
    else if(
      momentNow.isAfter(moment(timings.Asr,"hh:mm")) && 
      momentNow.isBefore(moment(timings.Sunset,"hh:mm"))){

      nextPrayer = "Maghreb";
      

    }
    else if(
      momentNow.isAfter(moment(timings.Sunset,"hh:mm")) && 
      momentNow.isBefore(moment(timings.Isha,"hh:mm"))){

      nextPrayer = "Isha";
      

    }
    else nextPrayer = "Fajr";
    setNextPrayer(nextPrayer);
    // apres quand connais la prochaine priere on peut dedeuire le temps qui reste jusqua cette priere 
    const nextPrayerTimes = timings[nextPrayer];
    const nextPrayerTimesMoment = moment(nextPrayerTimes,"hh:mm");

    let DifferenceTimes = moment(nextPrayerTimes,"hh:mm").diff(momentNow);
    console.log(`difference time est ${DifferenceTimes}`);
    // let remainingTime = (durationTimes.hours() , durationTimes.minutes(), durationTimes.seconds());
   
    if (DifferenceTimes < 0){
      const midnightDiff = moment("23:59:59","hh:mm:ss").diff(momentNow);
      const fajrTomidNightDiff = nextPrayerTimesMoment.diff(moment("00:00:00","hh:mm:ss"));
      const totatlDiffTimes = midnightDiff + fajrTomidNightDiff ;
      DifferenceTimes = totatlDiffTimes;

      
       

    };
    const durationTimes = moment.duration(DifferenceTimes);
    setRemaianing(`${durationTimes.hours()} : ${durationTimes.minutes()} : ${durationTimes.seconds()}`);

    // console.log("reste" ,durationTimes.hours(), durationTimes.minutes(), durationTimes.seconds());


   };
 
  // https://api.aladhan.com/v1/timingsByCity/29-01-2025?country=FR&city=marseille;

  const handleChange = (e) => {
    const findCity = cities.find((ville)=>(ville.id === e.target.value));
    setCity(findCity.name);

  };
  return (
    <>
    
    <Grid container> 
          <Grid size={6} >

            <div>

            <h2>
                {today}
            </h2>

              <h1>
               {city}
              </h1>
             

            </div>
             


          </Grid>

          <Grid size={6} >

            <div>

               <h2>
                  Reste jusqu'au prochaine priere  {nextPrayer} 
                </h2>

                <h1>
                  {remainning}
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
              
            <InputLabel  id="demo-simple-select-label">
            <span style = {{color:"white"}}>
              Ville
            </span>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
              onChange={handleChange}
              style={{color:"white"}}
             

            >{cities.map((item)=>
            (
              <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            )          

            )}
              
            </Select>
        </FormControl>
    
    </Stack> 

    </>
   
  )
}

