import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import axios from 'axios';
import React from 'react';
const Pdf=()=>{
	return(
		<>
		<Card className="card">
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      Project-Id:
    </Typography>
    <Typography color="textSecondary" gutterBottom>
     Project-Name :
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       Budget:
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       EndDate:
    </Typography>
     </CardContent>
      </Card>

	
		</>
	);
}
export default Pdf;