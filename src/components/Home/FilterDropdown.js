import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../assets/style/Home/FilterDropdown.css';


function FilterDropdown({label, options, selected, onSelect}){
    return(
        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id={`dropdown-${label}`}>
                {selected || `Chọn ${label}`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                    {options.map(option =>(
                        <Dropdown.Item key={option} onClick={()=> onSelect(option)}>
                            {option}
                        </Dropdown.Item>
                    ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FilterDropdown;