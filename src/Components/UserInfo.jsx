import React from "react";
import '../utils/style.css';

function UserInfo(props) {
    const { nume, prenume, meserie, salariu, data_angajarii, id } = props;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mx-3 d-flex flex-column align-items-center border border-dark user-info">
            <h2>
            {
            nume.length <= 10 ? nume : nume.substring(0, 10) + "..."
            } {
                prenume.length <= 10 ? prenume : prenume.substring(0, 10) + "..."
            }
            </h2>
            <p>Meserie: {
                meserie.length <= 10 ? meserie : meserie.substring(0, 10) + "..."
            }
            </p>
            <p>Salariu: {salariu}</p>
            <p>Data angajarii: {data_angajarii}</p>
            <p><small>Id: {id}</small></p>
        </div>
    )
}

export default UserInfo;