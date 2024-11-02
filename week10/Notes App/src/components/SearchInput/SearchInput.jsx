import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {filterNote} from '../../redux/Filter/FilterSlice';
import './search.css';

function SearchInput() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(filterNote(search));
    }, [search]);

    return(
        <div className="searchinput">
            <input type="text" placeholder='Search' value={search} onChange={(e)=> {setSearch(e.target.value)}} />
        </div>
    )
}

export default SearchInput;