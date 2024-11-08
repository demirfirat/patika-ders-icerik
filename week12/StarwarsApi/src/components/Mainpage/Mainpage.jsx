import { useEffect, useState } from "react";
import Starships from "../Starships/Starships";

function Mainpage() {
    // List to be kept in the first render with the package from the API
    const [list, setlist] = useState([]);
    // keep the initial list after filtering
    const [originalList, setOriginalList] = useState([]);
    // scan all rendered strings and find the correct result
    const [filter, setFilter] = useState("");
    // keep the page number
    const [page, setPage] = useState(1);
    // will check if there is more data
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=> {
        fetch(`https://swapi.dev/api/starships/?page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            if (page === 1){
                setOriginalList(data.results);
                setlist(data.results);
            } else {
                setOriginalList([...originalList, ...data.results]);
                setlist((prevList) => [...prevList, ...data.results]);
            }
            setHasMore(data.next !== null);
        });
    }, [page]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleClick = () => {
        setPage((prevPage) => prevPage + 1);
    };

    useEffect (()=>{
        const filteredList = originalList.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
        setlist(filteredList);
    }, [filter, originalList]);

    return (
        <div>
            <div className="search-area">
                <h3>Name / Model: </h3>
                <input type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Name / Model"
                 />
            </div>
            <hr />
            <div className="ships">
                {list.map((item, index) => (
                    <Starships
                    key={index}
                    name={item.name}
                    model={item.model}
                    hyperDrive={item.hyperdrive_rating}
                    url={item.url}
                    passengers={item.passengers}
                    />
                ))}
            </div>
                <div className="show-more">
                    {hasMore && (
                        <button 
                        onClick={handleClick}>Show More</button>
                    )}
                </div>
        </div>
    );
}
export default Mainpage;