import React, { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const ColorForm = ({ addColor }) => {
    const [formData, setFormData] = useState({
        name: "", color: "#000000"
    });
    const [redirect, setRedirect ] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }
    
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const newColor = {
            name: formData.name,
            color: formData.color,
            formatted: formData.name.toLowerCase().replace(' ', '-')
        }
        addColor(newColor);
        setRedirect(true);
    }
    
    if (redirect) {
        return (
            <Redirect to="/colors" />
        )
    }
    
    return (
        <form className="ColorForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Color Name: </label>
            <input
                type="text" id="name" name="name" placeholder="color name"
                value={formData.name} onChange={handleChange}
            />
            <label htmlFor="color">Color: </label>
            <input
                type="color" id="color" name="color"
                value={formData.color} onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default ColorForm;