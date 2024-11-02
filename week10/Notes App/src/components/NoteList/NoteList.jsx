
import {useSelector, useDispatch} from 'react-redux';
import { deleteNote } from '../../redux/Notes/NotesSlice';
import './notelist.css';

function NoteList() {
    const filter = useSelector((state)=> state.filterNote.search);

    const notes = useSelector((state)=> state.notes.notes);
    const dispatch = useDispatch();
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure you want to delete this note?")){
            dispatch(deleteNote(id));
       };
    };
    let filteredNotes = notes;
    {
        filter != "" ? filteredNotes = notes.filter((element) =>{
            if(element.title.includes(filter) || element.note.includes(filter)){
                return element;
            }
        }) : filteredNotes;
    }

    return (
        <div className="notelistwrapper">
            <div className="notelist">
                {
                filteredNotes.length != 0 ? 
                (filteredNotes.map((element)=> {
                    return <div className='note' key={element.id}>
                        <div className={`notetitle ${element.theme}`}>
                            <div>{element.title}</div>
                        </div>
                        <div className='Notecontent'>
                            {element.note}
                        </div>
                        <div className='notefooter'>
                            <div><button className={`notebutton ${element.theme}`} onClick={()=> handleDelete(element.id)}>Delete</button></div>
                        </div>
                    </div> 
                })) : <div><h2>Start taking notes</h2></div>
                }
            </div>
        </div>
    )
}

export default NoteList;