import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../layout.css"

const Layout = ({children}) => {
    const [collapsed,setCollapsed] = useState(false);
    const {user} = useSelector((state)=>state.user);
    const navigate = useNavigate();
    const location = useLocation()
    const userMenu =[
        {
            name:"Home",
            path:"/",
            icon:"ri-home-line"
        },
        {
            name:"Profile",
            path:"/profile",
            icon:"ri-profile-line"

        },
        {
            name:"AllJobs",
            path:"/alljobs",
            icon:"ri-file-list-line"
        },
        {
            name:"Job Recommendation",
            path:"/recommendjobs",
            icon:"ri-thumb-up-line"
        },

    ];
    const companyMenu =[
        {
            name:"Home",
            path:"/",
            icon:"ri-home-line"
        },

        {
            name:"Post Job",
            path:"/postjob",
            icon:"ri-file-add-line"
        }
    ];

    const menuToBeRendered = user?.isCandidate ? userMenu : companyMenu
  return (
    <div className='main'>
        <div className='d-flex layout'>
                <div className={`${collapsed ? 'collapsed-sidebar': 'sidebar'}`}>
                   <div className='sidebar-header'>
                        <h1 className='logo'>Find Job</h1>
                    </div>

            
                <div className='menu'>
                {menuToBeRendered.map((menu)=>{
                    const isActive = location.pathname === menu.path
                    return (<div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                       <i className={menu.icon}></i>
                       {!collapsed &&   <Link to={menu.path}>{menu.name}</Link>}
                        </div>
                    )
                })}
                <div className={`d-flex menu-item`} onClick={()=>{
                localStorage.clear()
                navigate('/login')
                
                }}>
                    <i className='ri-logout-box-line'></i>
                    {!collapsed && <Link to='/login'>Logout</Link>}

                </div>
                </div>
            </div>
            <div className='content'>
                <div className='header'>
                    {collapsed ? 
                     (<i className="ri-arrow-right-s-line header-action-icon" onClick={()=>setCollapsed(false)}></i>
                     ):(
                     <i className="ri-arrow-left-s-line header-action-icon" onClick={()=>setCollapsed(true)}></i>
                     )}
               
                <div className='d-flex align-items-center px-4'>
                    <i className="ri-notification-line header-action-icon px-3"></i>
                    <Link className='anchor' to="/profile">{user?.username}</Link>
                </div>

                </div>
                <div className='body'>
                    {children}

                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Layout