import React from 'react'
import "../layout.css"

const Layout = ({children}) => {
  return (
    <div className='main'>
        <div className='d-flex layout'>
            <div className='sidebar'>
                sidebar

            </div>
            <div className='content'>
                <div className='header'>
                    content

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