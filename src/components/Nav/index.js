import React from "react";


function Nav({currentPage, setCurrentPage, pages}) {

    

    return (
        <nav>
            <ul className="flex-row">
                <li className={`${currentPage === pages[0] && 'navActive'}`} onClick={()=> setCurrentPage(pages[0])}>
                    <div>
                        About me
                    </div>
                 </li>
                 <li className={`${currentPage === pages[1] && 'navActive'}`} onClick={()=> setCurrentPage(pages[1])}>
                    <div>
                        Portfolio
                    </div>
                 </li>
                <li className={`${currentPage === pages[2] && 'navActive'}`} onClick={()=> setCurrentPage(pages[2])}>
                   <div>Contact</div>
                </li>
                <li className={`${currentPage === pages[3] && 'navActive'}`} onClick={()=> setCurrentPage(pages[3])}>
                    <div>
                        Resume
                    </div>
                 </li>
            </ul>
        </nav>
    );
}

export default Nav;