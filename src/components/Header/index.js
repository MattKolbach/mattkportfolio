import React from "react";



function Header({children, name}) {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-default"> 
                <div className="container-fluid">         
                    <h1 className="navbar-header">
                        <a href="/mattkportfolio/">
                            {name}
                        </a>
                    </h1>
                    {children}  
                </div> 
            </nav> 
                            
        </header>
    );
}

export default Header;