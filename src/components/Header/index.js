import React from "react";



function Header({children, name}) {

    return (
        <header className="flex-row">
            <h2>
                <a href="/">
                    <span>{name}</span>
                </a>
            </h2>
            {children}
        </header>
    );
}

export default Header;