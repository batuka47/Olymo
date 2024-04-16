import { useState } from 'react';
import './style.css';

function DropdownBtn(props) {
    const [display, setDisplay] = useState('none');

    function handleClick() {
        setDisplay(display === 'none' ? 'block' : 'none');
    }

    return (
        <div>
            <div className="dropdown">
                <button onClick={handleClick} className="dropbtn">{props.Btn}</button>
                <div id="myDropdown" style={{ display }} className="dropdown-content">
                    {props.categories.map((e) => (
                        <button key={e.id}>{e.category}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DropdownBtn;