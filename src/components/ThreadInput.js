import React from "react";
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";

function ThreadInput({addThread}){
    const [title,OnChangeTitle] = useInput('');
    const [category,onChangeCategory] = useInput ('');
    const [body, onChangeBody] = useInput ('');

    function onSubmitHandler(event){
        event.preventDefault();
        addThread({title,category,body})
    }

    return(
        <form className="form-thread-input" onSubmit={onSubmitHandler}>
            <input type="text" placeholder=" Masukkan Judul " value={title} onChange={OnChangeTitle}/>
            <input type="text" placeholder=" Masukkan Category " value={category} onChange={onChangeCategory}/>
            <textarea placeholder=" Masukkan Diskusi " value={body} onChange={onChangeBody}> </textarea>
            <button>KIRIM</button>
        </form>
    )   
}
ThreadInput.propTypes = {
    addThread: PropTypes.func.isRequired
}
export default ThreadInput;