import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'
import {useState,useEffect} from 'react';


 const FormDialog=() =>{
  const [open, setOpen] = React.useState(false);
  const [project ,setProject]=useState({
    ProjectName:"",
    Budget:"",
    ProjectManager:"",
    StartDate:"",
    SiteAddress:" ",
    Railwayjuction:"",
    suplier1:"",
    contactperson:"",
    phone:"",
    email:"",
    EndDate:"",
    ProjectStatus:""

  });
  const onTextChangeField=(e)=>{
    setProject({
      ...project,
          [e.target.name]:e.target.value
    })
    console.log(project);
  }
  async function onFormSubmit(e){
    e.preventDefault();
    await axios.post("http://localhost:4444/project",project)
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        create new project
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.djklajdsklfjjklkjadsklfljlkasdfj.
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.djklajdsklfjjklkjadsklfljlkasdfj.
           
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            required="Please fillup"
            name="ProjectName"
            id="projectName"
            onChange={e=>onTextChangeField(e)}
            label="Project-Name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            name="Budget"
            id="name"
              onChange={e=>onTextChangeField(e)}
            label=" Budget"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            name="ProjectManager"
            id="name"
              onChange={e=>onTextChangeField(e)}
            label="ProjectManager"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            name="StartDate"
              onChange={e=>onTextChangeField(e)}
            id="name"
            label="StartDate"
            type="date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
              onChange={e=>onTextChangeField(e)}
            name="SiteAddress"
            id="name"
            label="SiteAddress"
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
           name="Railwayjuction"
            id="name"
           onChange={e=>onTextChangeField(e)}
            label="Railway Juction"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
           name="suplier1"
            id="name"
              onChange={e=>onTextChangeField(e)}
            label="suplier1"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            name="contactperson"
            id="name"
            onChange={e=>onTextChangeField(e)}
            label="Contact Person"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            name="phone"
              onChange={e=>onTextChangeField(e)}
            id="name"
            label="phone"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
          onChange={e=>onTextChangeField(e)}
            id="name"
            name="email"
            label="email"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            name="EndDate"
              onChange={e=>onTextChangeField(e)}
            margin="dense"
            id="name"
            label="End Date"
            type="Date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
              onChange={e=>onTextChangeField(e)}
            name="ProjectStatus"
            id="name"
            label="Project Status"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={e=>onFormSubmit(e)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;