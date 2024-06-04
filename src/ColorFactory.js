import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ColorFactory = ({ colors }) => {
    return (
        <React.Fragment>
            <Link className="ColorFactory" to="/colors/new"> Add a Color </Link>
            <div className="color-container">
                <div className="ColorFactory-selection"> Select a color
                    {colors.map(color => (
                        <div key={color.color}>
                            <Link to={{
                                pathname: `/colors/${color.formatted}`,
                                state: {name: color.name, color: color.color}
                            }}> {color.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ColorFactory;