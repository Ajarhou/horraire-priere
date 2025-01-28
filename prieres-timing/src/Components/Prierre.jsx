import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Prierre({name,time,image}) {
  return (
  
    
    
    
        <Card sx={{ maxWidth: 354 }}>
          <CardMedia
            sx={{ height: 140,width:270 }}
            image={image} 
            title="green iguana"

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {name}
            </Typography>
            <Typography variant="h1" sx={{ color:'text.secondary'}}>
             {time}
            </Typography>
          </CardContent>
         
        </Card>
      );
    }
    
  
 
