import React from "react";
import UserInfo from "./UserInfo";
import { connect } from "react-redux";

function UserList(props) {
    const { users, filter, sortKey } = props;

    let usersSorted = Object.assign([], users);
    console.log(usersSorted);

    usersSorted.sort((a, b) => {
        if(sortKey == "salariu" || sortKey == "id") {
            let x = Number(eval("a." + sortKey));
            let y = Number(eval("b." + sortKey));
            return x - y;
        }
        else {
            let x = (eval("a." + sortKey)).toUpperCase();
            let y = (eval("b." + sortKey)).toUpperCase();
            let z;
            if (x < y) {
                z = -1;
            } else if (x > y) {
                z = 1;
            } else z = 0;
            //console.log(z);
            return z;
        }
    });

    return(
        <div className="row">
            {usersSorted.map((user) =>{
                if(eval(filter)) {
                    return <UserInfo
                    {...user}
                    
                    />
                }
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList);