import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const linkStyle = {padding: '8px'}

const Layout = () => {
    return (
        <>
            <div style={{width: '100vw', height: '50px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
                background: 'rgb(101,216,230)',
            }}>
                <Link to={'/'} style={linkStyle}>Home</Link>
                <Link to={"/protected"} style={linkStyle}>Protected</Link>
            </div>

            <Outlet/>
        </>
    );
};

export default Layout;