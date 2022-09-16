import {Routes,Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Pdf from '../component/pages/Pdf';
import  Reg from '../component/pages/Reg';
import Project from '../component/pages/Project';
const Nav=()=>{
	return(
        <div className="Navbar1">
		<Routes>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/pdf" element={<Pdf/>}/>
  <Route path="/report/allprojectbudgetplot" element={<Project/>}/>
  <Route path="/project/:id" element={<Reg/>}/>
  </Routes>
    </div>
	);

}
export default Nav;