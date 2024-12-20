import React from "react";
import List from './List';

function Content() {
    return ( 
        <section className="main">
            <input type="checkbox" className="toggle-all" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
            <List />
        </section>
    )
}

export default Content;