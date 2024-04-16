import {useState, useEffect} from 'react';
import DropdownBtn from './dropdown/dropdownBtn';
import Logo from '../../logo';

function Header(){
    const newDate = new Date(2023, 0, 1, 0, 0, 0);
    const [date, setDate] = useState(new Date());

    return (
        <div className='Con'>
            <Logo/>

            <div className='BtnCon'>
                <DropdownBtn Btn="Олимпиад" categories={[{id:"1",category:"Математик"},{id:"2",category:"Физик"},{id:"3",category:"Мэдээлэл зүй"},{id:"4",category:"Монгол хэл"}]}/>
                <DropdownBtn Btn="Материал" categories={[{id:"1",category:"Математик"},{id:"2",category:"Физик"},{id:"3",category:"Мэдээлэл зүй"},{id:"4",category:"Монгол хэл"}]}/>
                <button>Мэдээ</button>
                <button>Бидний тухай</button>
                <button>Монгол</button>
            </div>
            <div>
                <div>
                    Current Date: {date.toLocaleString()}
                </div>
            </div>
        </div>
    )
}

export default Header