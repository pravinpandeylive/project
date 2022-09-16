import HomeIcon from '@mui/icons-material/Home';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {Link} from 'react-router-dom';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const Navbar=()=>{
	return(
		
		<ul>
		<li><Link to="/dashboard"><HomeIcon  className="HomeIcon"/></Link></li>
		<li><Link to="/pdf"><PictureAsPdfIcon className="HomeIcon"/></Link></li>
		<li><Link to="/report/allprojectbudgetplot"><LeaderboardIcon className="HomeIcon"/></Link></li>
		</ul>
		
	
	);
}
export default Navbar;