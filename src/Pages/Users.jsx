import React from "react";
import SortFilterSidebar from "../Components/SortFilterSidebar";
import UserList from "../Components/UserList";
import '../utils/style.css';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: 'true',
            sortKey: 'id'
        }
    }

    applyFilter(event) {
        this.setState({filter: event.target.value});
        console.log("a")
    }

    applySortKey(event) {
        this.setState({sortKey: event.target.value})
    }

    render() {
        return(
            <div className="d-flex justify-content-center align-content-center my-3 mx-5">
                <SortFilterSidebar className="sidebar flex-column flex-shrink-1 flex-grow-1"
                applyFilter={(event) => this.applyFilter(event)}
                applySortKey={(event) => this.applySortKey(event)}/>
                <UserList {...this.state} className="flex-column justify-content-end"/>
            </div>
        )
    }
}

export default Users;