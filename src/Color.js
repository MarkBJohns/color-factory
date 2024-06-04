import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Color = (props) => {
    const { name, color } = props;
    useEffect(() => {
        document.body.style.background = `linear-gradient(to bottom, black 30%, ${color} 32%)`;
        
        return () => {
            document.body.style.background = null;
        }
    }, [color]);
    
    return (
    <div>
        <h1 style={{backgroundColor: "whitesmoke", color: color }}>{name}</h1>
        <Link to="/colors">
            <button>Home</button>
        </Link>
    </div>
    )
}

export default Color;