import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Card2 from '../Card2';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import FormDialog from './FormDialog';
const Home=()=>{

   
    return(
<>
<div className="button">
<FormDialog />
</div>
<Grid container spacing={3} className="grid">
 <Grid container item spacing={3}>
<Card2/>
    </Grid>
    
     
</Grid>

</>
        );
}
export default Home;
