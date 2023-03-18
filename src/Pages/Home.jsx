import React from "react";
import Form from "../Components/Form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../Redux/user-actions";

function Home(props) {
    const { users } = props;

    return(
        <div className="home-comp">
            <Form users={users} addUser={(user) => props.addUser(user)}/>
            <Link to='/users'>Lista de utilizatori</Link>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);