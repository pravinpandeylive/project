import  React from 'react';

import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,
	CartesianGrid,Legend,Tooltip} from 'recharts';
const Project=()=>{
	const Sdata=[
{
	ProjectId:1001,
	ProjectName:"Bridge Construction",
	Budget:2000,
	EndDate:"02/10/2022"
},
{
	ProjectId:2002,
	ProjectName:"Bridge Construction",
	Budget:4000,
	EndDate:"02/10/2022"
},
{
	ProjectId:3003,
	ProjectName:"Bridge Construction",
	Budget:6000,
	EndDate:"02/10/2022"
},
{
	ProjectId:4004,
	ProjectName:"Bridge Construction",
	Budget:8000,
	EndDate:"02/10/2022"
}
]
	return(
		<>
		<h1>Project Budget</h1>
		<ResponsiveContainer width="80%" aspect={3}>
		<LineChart data={Sdata} width={500} height={300} margin={{top:5,
			right:300, left:20,bottom:5}}>
			<CartesianGrid strokeDasharray="3 3"/>
		<XAxis dataKey="ProjectId" interval={'preserveStartEnd'}/>
		<YAxis dataKey="Budget"/>
		<Tooltip/>
		<Legend/>
		<Line type="monotone" dataKey="ProjectId" stroke="red" activeDot={{r:8}}/>
 
		</LineChart>
		</ResponsiveContainer>
		</>
	);
}
export default Project;