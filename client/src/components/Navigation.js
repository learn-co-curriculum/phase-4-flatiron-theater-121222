import { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navigation({updateUser}) {
 const [menu, setMenu] = useState(false)
 const history = useHistory()
  const handleLogout = () => {
    fetch('/logout',{
      method:'DELETE'
    })
    .then(res => {
      if(res.ok){
        updateUser(null)
        history.push('/login')
      }
    })
  }
    return (
        <Nav> 
         <NavH1>Flatiron Theater Company</NavH1>
         <Menu>
           {!menu?
           <div onClick={() => setMenu(!menu)}>
             <GiHamburgerMenu size={30}/> 
           </div>:
           <ul>
            <li onClick={() => setMenu(!menu)}>x</li>
            <li><Link to='/users/1'>User Page</Link></li>
            <li><Link to='/users/new'>Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/productions/new'>New Production</Link></li>
            <li><Link to='/'> Home</Link></li>
            <button onClick={handleLogout}>Logout</button>
           </ul>
           }
         </Menu>

        </Nav>
    )
}

export default Navigation


const NavH1 = styled.h1`
font-family: 'Splash', cursive;
`
const Nav = styled.div`
  display: flex;
  justify-content:space-between;
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color:white;
    font-family:Arial;
  }
  a:hover{
    color:pink
  }
  ul{
    list-style:none;
  }
  
`;
