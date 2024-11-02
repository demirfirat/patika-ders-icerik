import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeTheme } from '../../redux/colorTheme/ColorSlice';
import { addNote } from '../../redux/Notes/NotesSlice';
import './input.css';

function Input() {
    const colorThemes = ["blue", "pink",  "gray", "yellow", "green"];
    const colorTheme = useSelector((state) => state.colorTheme.theme);
    const dispatch = useDispatch();

    const titleRef = useRef();
    const noteRef = useRef();

    const handleSubmit = () => {
        dispatch(addNote({title: titleRef.current.value, note: noteRef.current.value, theme: colorTheme}));
        titleRef.current.value = "";
        noteRef.current.value = "";
    };

    return (
        <div className="input">
            <input type="text" placeholder='Note Title' 
            ref={titleRef} />
            <textarea name="notearea"
             cols={60}
             rows={5}
             placeholder='Write your note here'
             ref={noteRef}></textarea>
             <div className="inputfooter">
                <div className="colorselector">
                  {colorThemes.map((element, index) => {
                    return <button onClick={(e) => {dispatch(changeTheme(e.target.value))}} key={index} value={element} className={colorTheme === element ? `colorselectorbutton ${element} selected` : `colorselectorbutton ${element}`}></button>
                  })}  
                </div>
                <button className={`submitbutton ${colorTheme}`}
                onClick={handleSubmit}>Add Note</button>
             </div>
        </div>
    )
}

export default Input;