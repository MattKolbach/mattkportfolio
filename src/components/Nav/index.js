import React from "react";


function Nav() {

    

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <div>
                        About me
                    </div>
                 </li>
                 <li className="mx-2">
                    <div>
                        Portfolio
                    </div>
                 </li>
                <li>
                   <div>Contact</div>
                </li>
                <li className="mx-2">
                    <div>
                        Resume
                    </div>
                 </li>
            </ul>
        </nav>
    );
}

export default Nav;