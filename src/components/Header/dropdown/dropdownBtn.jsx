import { useState } from 'react';
import './style.css';

import { SlArrowDown } from "react-icons/sl";

function DropdownBtn(props) {
    const [display, setDisplay] = useState('none');

    function handleClick() {
        setDisplay(display === 'none' ? 'block' : 'none');
    }

    return (
        <div>
            <div className="dropdown">
                <button onClick={handleClick} className="dropbtn">{props.Btn}   <SlArrowDown size="12px" /></button>
                <div id="myDropdown" style={{ display }} className="dropdown-content">
                    {props.categories.map((e) => (
                        <button key={e.id}><li>  {e.category}</li></button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DropdownBtn;