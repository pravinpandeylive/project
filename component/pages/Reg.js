
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import {Link ,useParams} from 'react-router-dom';

const Reg=()=>{
	const {id}=useParams();
	const[project,setProject]=useState([]);
	useEffect(()=>{
		getAllData();

	})
	async function getAllData()
	{
		const project= await axios.get(`http://localhost:4444/project/${id}`)
		setProject(project.data);
	}
	return(
		<>
		<Grid container spacing={3} className="grid">
 <Grid container item spacing={3}>
			<Card  className="head">
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      Project-Id:{project.id}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
     Project-Name :{project.ProjectName}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Project-Manager:{project.ProjectManager}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       Start-Date:{project.StartDate}
    </Typography>
     </CardContent>
      </Card>
      <Card  className="head">
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      Site-Address:{project.SiteAddress}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
    Railway-juction :{project.Railwayjuction}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       Budget:      {project.Budget}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       EndDate:    {project.EndDate}
    </Typography>
     </CardContent>
      </Card>
      <Card  className="head">
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      suplier1:   {project.suplier1}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
    contactperson :{project.contactperson}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      phone:{project.phone}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      email:{project.email}
    </Typography>
     </CardContent>
      </Card>
      <Card spacing={2}  className="card1">
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      ProjectStatus:{project.ProjectStatus}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
                           {project.ProjectStatus1}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      				{project.ProjectStatus2}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       {project.ProjectStatus3}
    </Typography>
     </CardContent>
      </Card>
      </Grid>
    
     
</Grid>

<h2 className="h2">Project Details</h2>


	</>
	);

}
export default Reg;