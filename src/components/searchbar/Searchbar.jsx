import React, {useState, useRef} from "react";
import "./Searchbar.css"

const searchbar = () => {
    const [location, setLocation] = useState(null);
    const inputRef = useRef(null)

    const handleSearch = ()=>{
        console.log(inputRef.current.value);
    }

    return (
        <div className="searchbar">
            <input ref={inputRef} className="textfield" />
            <button onClick = {handleSearch} className="button">Go</button>
        </div>
    );
};

export default searchbar;
