import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
const Card2=()=>{
   const[project ,setProject]=useState([]);
   useEffect(()=>{
      setAllData();
   })
   async function setAllData()
   {
      const project= await axios.get('http://localhost:4444/project')
  
      setProject(project.data)
   }
	return(
	<>
	
 
 
    {
      project.map((item,i)=>{
         return(
            <>
       <Link to={`/project/${item.id}`} className="Link" >   
       <Card  className="head">
               <CardContent>
             <Typography color="textSecondary" gutterBottom keys={i}>

      Project-Id:{item.id}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
     Project-Name :{item.ProjectName}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       Budget:{item.Budget}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       EndDate:{item.EndDate}
    </Typography>
     </CardContent>
      </Card> </Link>

            </>
            );
      })
    }
    
   
   
   
	</>
	);
}
export default Card2;