import React from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
function AddButton(){
    return(
        <div className="add-button">
            <Link to="/add">
            <button><CiCirclePlus size={60}/></button>
            </Link>
        </div>
    )
}
export default AddButton;