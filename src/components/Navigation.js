import React from "react";
import {Link} from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import PropTypes from 'prop-types';
function Navigation ({authUser,signOut}){
    const { id, avatar, name } = authUser;
    console.log(authUser)
    return(
        <nav className="navigation">
            <ul>
                    
                <li><Link to="/" className="text-nav">FORUM DISCUSSION</Link></li>
                <li>
                    <div className="profile">
                        <img src={avatar} alt={id} title={name}/>
                        <h4 className="name-profile">{name}</h4>
                        <Link to ="/" ><button onClick={signOut}><FiLogOut size={30}/>Logout    </button></Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
const authUserShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  
  };
  
  Navigation.propTypes = {
    authUser: PropTypes.shape(authUserShape).isRequired,
    signOut: PropTypes.func.isRequired,
  };        
export default Navigation;